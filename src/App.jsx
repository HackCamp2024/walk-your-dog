import { useState, useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";
import Dog from "./components/Dog/Dog";
import LoginButton from "./components/LoginButton/LoginButton";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/LogoutButton/LogoutButton";

function App() {
  const [hearts, setHearts] = useState(() => {
    const savedHearts = localStorage.getItem("hearts");
    return savedHearts ? parseInt(savedHearts, 10) : 3;
  });
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const [steps, setSteps] = useState(() => {
    const savedSteps = localStorage.getItem("steps");
    return savedSteps ? parseInt(savedSteps, 10) : 0;
  });

  // value for the demo
  // how many days passed from the init state
  const [day, setDay] = useState(() => {
    const savedDay = localStorage.getItem("day");
    return savedDay ? parseInt(savedDay, 10) : 0; // default to 0 if not found
  });

  //dog mood
  const [mood, setMood] = useState(() => {
    const savedMood = localStorage.getItem("mood");
    return savedMood || "medium"; // default to 'medium' if not found
  });

  //save to localStorage whenever there's change
  useEffect(() => {
    localStorage.setItem("hearts", hearts);
    localStorage.setItem("steps", steps);
    localStorage.setItem("day", day);
    localStorage.setItem("mood", mood);
  }, [steps, hearts, day, mood]);

  //changes dog mood
  useEffect(() => {
    if (hearts <= 1) {
      setMood("sad");
    } else if (hearts == 5) {
      setMood("happy");
    } else {
      setMood("medium");
    }
  }, [hearts]);

  // For demo
  const handleClickNextDay = () => {
    setDay(day + 1);
    setSteps(0);
    if (steps >= 10000) {
      if (hearts == 5) {
        setHearts(hearts);
      } else {
        setHearts(hearts + 1);
      }
    } else {
      if (hearts == 0) {
        setHearts(hearts);
      } else {
        setHearts(hearts - 1);
      }
    }
  };

  const [fitData, setFitData] = useState(null);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          scope: "https://www.googleapis.com/auth/fitness.activity.read",
        });

        const response = await fetch("/fitness-api", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          const stepCount = data.dataset[0].point[0].value[0].intVal;
          setSteps(stepCount);
          console.log(data);
        } else {
          console.error("Error fetching steps", response.status);
        }
      } catch (error) {
        console.error("Error fetching steps", error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div className="background">
      <Header
        day={day}
        handleClickNextDay={handleClickNextDay}
        hearts={hearts}
        user={user}
        isAuthenticated={isAuthenticated}
      />
      <Dog mood={mood} />
      <div>
        <Progress steps={steps} />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}

export default App;
