import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTa0x4kUjC8QlI7u7amsPGnmRvuEKFb2I",
  authDomain: "esg-analytics-595c5.firebaseapp.com",
  projectId: "esg-analytics-595c5",
  storageBucket: "esg-analytics-595c5.appspot.com",
  messagingSenderId: "768458105791",
  appId: "1:768458105791:web:c16bdd9b7b561de240b70a",
  measurementId: "G-9J8DQX260V",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// watch for auth changes
export const auth = getAuth(app);
