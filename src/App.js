import "./App.css";
//import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetch from "node-fetch";
import { setIdToken, setMetabaseUrls } from "./redux/reducer";
import { Header } from "./containers/Header/Header";
import { Body } from "./containers/Body/Body";
import { auth } from "./security/firebase";

const App = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Get data necessary for communication with API once user is logged in
    ////////////////////////////////////////////////////////////////
    const getMetabaseUrls = async (idToken) => {
      const response = await fetch(
        `https://8000-rose-frog-ypzfsgul.ws-eu21.gitpod.io/metabaseconfig/${idToken}`
      );
      return await response.json();
    };
    const getIdToken = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
        const metabaseUrls = await getMetabaseUrls(idToken);
        dispatch(setIdToken(idToken));
        dispatch(setMetabaseUrls(metabaseUrls));
      }
    };
    getIdToken();
  }, [dispatch]);
  ////////////////////////////////////////////////////////////////

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
