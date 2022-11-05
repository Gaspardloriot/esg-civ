import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.json";
import { changeAuthState } from "../containers/login/changeAuthState";
import { idTokenFunc } from "../security/idToken";
import { metabaseUrlsFunc } from "../security/metabaseUrls";

export const stateSlice = createSlice({
  name: "stateActions",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    switchComponent: (state, { payload }) => {
      state.component = payload;
    },
    toggleOverlay: (state) => {
      state.Overlay.isVisible = !state.Overlay.isVisible;
    },
    changeAuth: (state, { payload }) => {
      changeAuthState(state, payload);
    },
    setIdToken: (state, { payload }) => {
      idTokenFunc(state, payload);
    },
    setMetabaseUrls: (state, { payload }) => {
      metabaseUrlsFunc(state, payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  switchComponent,
  toggleOverlay,
  changeAuth,
  setIdToken,
  setMetabaseUrls,
} = stateSlice.actions;

export default stateSlice.reducer;
