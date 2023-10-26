import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Text } from "./Text";
import { Timer } from "./Timer";
import "./style.css";
import TimeList from "./TimeList";
import { TestContext } from "./TestContext";
export const App = () => {
  const [Label, SetLabel] = useState("Timer");
  const handelSetLabel = () => {
    if (Label == "Timer") {
      SetLabel("زمان سنج");
    } else {
      SetLabel("Timer");
    }
  };
  const [isLight, setisLight] = useState(false);
  const handelSetisLight = () => {
    setisLight(!isLight);
  };
  const [TimeArray, SetTimeArray] = useState([
    " 12 : 55 : 34 ",
    " 05 : 16 : 43 ",
  ]);
  return (
    <TestContext.Provider value={{ TimeArray, SetTimeArray }}>
      <div
        className="main"
        style={{ background: isLight ? "#d2d9e1" : "#1c2833" }}
      >
        <Text Label={Label} />
        <Timer
          handelSetLabel={handelSetLabel}
          handelSetisLight={handelSetisLight}
          isLight={isLight}
        />
        <TimeList />
      </div>
    </TestContext.Provider>
  );
};
