import { configureStore } from "@reduxjs/toolkit";
import fullStateReducer from "./reducer";

export default configureStore({
  reducer: {
    fullState: fullStateReducer,
  },
});
