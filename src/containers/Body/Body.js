import { useSelector } from "react-redux";
import { Component1 } from "../../components/component_1/component_1";
import { Component2 } from "../../components/component_2/component_2";
import { Overlay } from "../../components/Overlay/Overlay";

export const Body = () => {
  const { component } = useSelector((state) => state.fullState);
  let activeComponent;
  switch (component) {
    case "Component1":
      activeComponent = <Component1 />;
      break;
    case "Component2":
      activeComponent = <Component2 />;
      break;
    default:
      activeComponent = <Component1 />;
  }

  return (
    <div>
      {activeComponent}
      <Overlay />
    </div>
  );
};
