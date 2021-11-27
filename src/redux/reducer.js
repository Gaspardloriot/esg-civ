import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.json";

const tester = (state) => {
  state.testing === "margaux"
    ? (state.testing = "gaspard")
    : (state.testing = "margaux");
  console.log(state);
};

export const stateSlice = createSlice({
  name: "stateActions",
  initialState: {...initialState, component:<div>hello world</div>},
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    test: (state) => {
      tester(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, test } =
  stateSlice.actions;

export default stateSlice.reducer;
