import logo from "./logo.svg";
import "./App.css";
//import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/reducer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BodyTest } from "./containers/body/BodyTest";

import { HeaderTest } from "./containers/header/header";

function App({ user }) {
  console.log(user);
  const { count } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return user ? (
    <div className="App">
      <header className="App-header">
        <BodyTest />
        <h1> The count is: {count}</h1>

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Increment by 33
        </button>
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
        <HeaderTest />
      </header>
    </div>
  ) : (
    <Navigate to="login" />
  );
}

export default App;
