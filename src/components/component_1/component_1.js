import { decrement, increment } from "../../redux/reducer";
import logo from "../../logo.svg";
import { useDispatch, useSelector } from "react-redux";

export const Component1 = () => {
  const { count } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <div>
      <h3> The count is: {count}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};
