import { useSelector } from "react-redux";
import { Component1 } from "../../components/component_1/component_1";
import { Component2 } from "../../components/component_2/component_2";

export const Body = () => {
  const { component } = useSelector((state) => state.fullState);
  return (
    <div>{component === "Component1" ? <Component1 /> : <Component2 />}</div>
  );
};
