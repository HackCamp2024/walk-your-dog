import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";
import Input from  "./components/Input/Input";
import "./App.css";

function App() {
  const [hearts, setHearts] = useState(3);

  // TODO: integrate with Input later
  const [steps, setSteps] = useState(0);
  const [value, setValue] = useState(0)

  // value for the demo
  // how many days passed from the init state
  const [day, setDay] = useState(0);

  // For demo
  const handleClickNextDay = () => {
    setDay(day + 1);
    setSteps(0);
    // TODO change the number of hearts to fill depending on the number of steps the user had at the day
  };

  const updateCurrentInput = (e) => {
    setValue(+e.target.value)
  }

  return (
    <>
      <Header
        day={day}
        handleClickNextDay={handleClickNextDay}
        hearts={hearts}
      />
      <Progress steps={steps} />
      <Input
      value={value}
      handleChange={updateCurrentInput}
      setSteps={setSteps}
      />
    </>
  );
}

export default App;
