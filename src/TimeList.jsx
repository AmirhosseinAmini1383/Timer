import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";
const TimeList = () => {
  const context = useContext(TestContext);
  console.log(context);
  return (
    <div className="time-list">
      {context.TimeArray.map((item) => (
        <Item key={Math.random()}>{item}</Item>
      ))}
    </div>
  );
};
export default TimeList;
