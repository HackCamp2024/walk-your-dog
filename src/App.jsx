import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";


import "./App.css";

function App() {
  const [hearts, setHearts] = useState(3);

  // TODO: integrate with Input later
  const [steps, setSteps] = useState(5000);

  // value for the demo
  // how many days passed from the init state
  const [day, setDay] = useState(0);

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
            setHearts(hearts -1);
        }
    }
  };

  return (
    <>
      <Header
        day={day}
        handleClickNextDay={handleClickNextDay}
        hearts={hearts}
      />
      <Progress steps={steps} />
    </>
  );
}

export default App;
