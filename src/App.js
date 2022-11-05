import "./App.css";
//import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIdToken } from "./redux/reducer";
import { Header } from "./containers/Header/Header";
import { Body } from "./containers/Body/Body";
import { auth } from "./security/firebase";

const App = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getIdToken = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
        dispatch(setIdToken(idToken));
      }
    };
    getIdToken();
  }, [dispatch]);

  return user ? (
    <div className="App">
      <Header />
      <Body />
    </div>
  ) : (
    <Navigate to="login" />
  );
};

export default App;
