// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useSelector } from "react-redux";
const config = {
  apiKey: "AIzaSyDDgbmB4mZVczTI1VXynPV3QgXsk5EemjI",
  authDomain: "resilience-7ebf4.firebaseapp.com",
  // ...
};
const app = firebase.initializeApp(config);
const auth = app.auth();

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

export function Login(props) {
  const { count } = useSelector((state) => state.fullState);
  return (
    <div>
      <h1>{`My App has the count ${props.test_props}`}</h1>
      <p style={{ color: "red" }}>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
