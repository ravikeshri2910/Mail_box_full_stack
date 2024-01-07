import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModel: false,
  isInbox:false,
  isDeleteInbox:false,
  isSent : false,
  openMail : false
};

const stateSlice = createSlice({
  name: 'StateHandler',
  initialState: initialState,
  reducers: {

    modelHandler(state) {
      state.isModel = !state.isModel; // Correct way to update a boolean state
    },

    inboxHandler(state){
      state.isInbox = true
      state.isDeleteInbox=true
      state.isSent = false
      state.openMail = false
    },
    inboxHandlerFalse(state){
      state.isInbox = false
      state.isSent = false
      state.openMail = false
    },
    sentHandler(state){
      state.isInbox = false
      state.isSent = true
      state.isDeleteInbox=false
      state.openMail = false
    },

    openMailHandler(state){
      state.openMail = true
    }

  },
});

export const stateAction = stateSlice.actions
export default stateSlice.reducer