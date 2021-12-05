import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { changeAuth } from "../../redux/reducer";
import { auth } from "../../security/firebase";

export const Login = () => {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const currentUser = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        changeAuth(
          currentUser
            ? {
                email: currentUser.email,
                uid: currentUser.uid,
              }
            : currentUser
        )
      );
    });
  }, [dispatch]);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      //const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
      //console.log(idToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {currentUser?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};
