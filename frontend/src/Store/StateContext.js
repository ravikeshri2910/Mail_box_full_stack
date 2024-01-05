import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModel: false,
};

const stateSlice = createSlice({
  name: 'StateHandler',
  initialState: initialState,
  reducers: {
    modelHandler(state) {
      state.isModel = !state.isModel; // Correct way to update a boolean state
    },
  },
});

export const stateAction = stateSlice.actions
export default stateSlice.reducer