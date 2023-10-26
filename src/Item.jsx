import { useContext } from "react";
import { TestContext } from "./TestContext";
const Item = (props) => {
  const context = useContext(TestContext);
  const handelDeleteItem = (e) => {
    context.SetTimeArray(
      context.TimeArray.filter((Time) => Time != e.target.innerHTML)
    );
  };
  return <div onClick={handelDeleteItem}>{props.children}</div>;
};
export default Item;
