import { Container } from "react-bootstrap";
import { decrement, increment, toggleOverlay } from "../../redux/reducer";
import logo from "../../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../security/firebase";
import { signOut } from "firebase/auth";

const logout = async () => {
  await signOut(auth);
};

export const Component1 = () => {
  const { count } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "white" }}> The count is: {count}</h3>
        <Container>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => logout()}>logout</button>
          <button onClick={() => dispatch(toggleOverlay())}>
            toggleOverlay
          </button>
        </Container>
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
      </Container>
    </div>
  );
};
