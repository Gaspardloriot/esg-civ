import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.json";

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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, switchComponent, toggleOverlay } =
  stateSlice.actions;

export default stateSlice.reducer;
