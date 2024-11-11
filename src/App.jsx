import { useState, useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";
import Input from  "./components/Input/Input";
import Dog from "./components/Dog/Dog";
import ARView from './components/AR/AugReality';

import "./App.css";

function App() {
    const [hearts, setHearts] = useState(() => {
        const savedHearts = localStorage.getItem("hearts");
        return savedHearts ? parseInt(savedHearts, 10) : 3; 
    });

    // TODO: integrate with Input later
    const [steps, setSteps] = useState(() => {
        const savedSteps = localStorage.getItem("steps");
        return savedSteps ? parseInt(savedSteps, 10) : 0;
    });
  const [value, setValue] = useState(0)

    // value for the demo
    // how many days passed from the init state
    const [day, setDay] = useState(() => {
        const savedDay = localStorage.getItem("day");
        return savedDay ? parseInt(savedDay, 10) : 0; // default to 0 if not found
    });

    //dog mood
    const [mood, setMood] = useState(() => {
        const savedMood = localStorage.getItem("mood");
        return savedMood || 'medium'; // default to 'medium' if not found
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
            setMood('sad');
        } else if (hearts == 5) {
            setMood('happy');
        } else {
            setMood('medium');
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

    const handleReset = () => {
        setHearts(3);
        setSteps(0);
        setDay(0);
        setMood('medium');
        localStorage.removeItem("hearts");
        localStorage.removeItem("steps");
        localStorage.removeItem("day");
        localStorage.removeItem("mood");
    }

    const updateCurrentInput = (e) => {
        setValue(+e.target.value);
    }

    return (
        <div className="background">
            <Header
                day={day}
                handleClickNextDay={handleClickNextDay}
                hearts={hearts}
            />
            <ARView 
            />
            <Dog mood={mood} />
            <Progress steps={steps} />
            <button onClick={handleReset}>Reset</button>
          <Input
      value={value}
      handleChange={updateCurrentInput}
      setSteps={setSteps}
      />
    </div>
    );
}

export default App;
