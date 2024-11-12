import { useState, useEffect } from "react";
import Cookie from "js-cookie"; // Import js-cookie for cookie management

import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";
import Dog from "./components/Dog/Dog";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import { fetchStepsData } from "./utils/getStepsData";

import { googleLogout } from "@react-oauth/google";

import "./App.css";

function App() {
  const [hearts, setHearts] = useState(() => {
    const savedHearts = localStorage.getItem("hearts");
    return savedHearts ? parseInt(savedHearts, 10) : 3;
  });

  const [steps, setSteps] = useState(() => {
    const savedSteps = localStorage.getItem("steps");
    return savedSteps ? parseInt(savedSteps, 10) : 0;
  });

  const [error, setError] = useState(false);

  const [mood, setMood] = useState(() => {
    const savedMood = localStorage.getItem("mood");
    return savedMood || "medium";
  });

  useEffect(() => {
    localStorage.setItem("hearts", hearts);
    localStorage.setItem("mood", mood);
  }, [steps, hearts, mood]);

  useEffect(() => {
    if (hearts <= 1) {
      setMood("sad");
    } else if (hearts == 5) {
      setMood("happy");
    } else {
      setMood("medium");
    }
  }, [hearts]);

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check if the token is stored in the cookie when the app is loaded
    const tokenFromCookie = Cookie.get("access_token");
    if (tokenFromCookie) {
      setAccessToken(tokenFromCookie);
      fetchStepsData(tokenFromCookie);
    }
  }, []);

  // Check if one day has passed and update hearts accordingly
  useEffect(() => {
    const lastUpdateDate = localStorage.getItem("lastUpdateDate");
    const currentDate = new Date().toISOString().split("T")[0]; // Today's date (YYYY-MM-DD)

    if (lastUpdateDate !== currentDate) {
      // A new day has passed, update hearts
      if (steps >= 10000) {
        if (hearts < 5) {
          setHearts(hearts + 1);
        }
      } else {
        if (hearts > 0) {
          setHearts(hearts - 1);
        }
      }
      // Save the new date of the update
      localStorage.setItem("lastUpdateDate", currentDate);
    }
  }, [hearts, steps]);

  const handleLoginSuccess = async (response) => {
    const token = response.access_token;
    // Save the token to a cookie
    Cookie.set("access_token", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
    setAccessToken(token);
    const steps = await fetchStepsData(token);
    if (steps === false) {
      setSteps(0);
      setError(true);
    } else {
      setSteps(steps);
      setError(false);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Login failed:", error);
  };

  const handleLogout = () => {
    googleLogout();
    Cookie.remove("access_token");
    setAccessToken(null);
  };

  return (
    <div className="background">
      <Header hearts={hearts} />
      <Dog mood={mood} />
      <div>
        {error ? (
          <p>Something wend wrong! Please try again!</p>
        ) : (
          <Progress steps={steps} />
        )}
        {!!accessToken ? (
          <LogoutButton handleLogout={handleLogout} />
        ) : (
          <LoginButton
            handleLoginSuccess={handleLoginSuccess}
            handleLoginFailure={handleLoginFailure}
          />
        )}
      </div>
    </div>
  );
}

export default App;
