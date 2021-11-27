import { useSelector } from "react-redux";
const test = { something: <div>whatever dude</div> };

export const BodyTest = () => {
  const { component } = useSelector((state) => state.fullState);
  console.log(useSelector((state) => state.fullState));
  const currentUser = true;
  return currentUser ? (
    <div>
      <p>hello</p>
      {component}
    </div>
  ) : (
    <div>no current user</div>
  );
};
