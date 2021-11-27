import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.json";

export const stateSlice = createSlice({
  name: "stateActions",
  initialState: { ...initialState, component: <div>hello world</div> },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    switchComponent: (state, { payload }) => {
      console.log(payload);
      state.component = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, switchComponent } = stateSlice.actions;

export default stateSlice.reducer;
