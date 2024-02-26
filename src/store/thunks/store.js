import { configureStore } from "@reduxjs/toolkit";
import { authSingUpSlice } from "../slices/authSlice";
import { trelloSlice } from "../slices/TrelloSicle";
export const store = configureStore({
  reducer: {
    auth: authSingUpSlice.reducer,
    trello: trelloSlice.reducer,
  },
});
