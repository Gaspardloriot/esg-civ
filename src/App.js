import "./App.css";
//import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { Header } from "./containers/Header/Header";
import { Body } from "./containers/Body/Body";

function App({ user }) {
  return user ? (
    <div className="App">
      <Header />
      <Body />
    </div>
  ) : (
    <Navigate to="login" />
  );
}

export default App;
