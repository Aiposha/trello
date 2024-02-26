import { createSlice } from "@reduxjs/toolkit";
import { signUpPostThunks } from "../thunks/authThunks";

export const authSingUpSlice = createSlice({
  name: "auth",
  initialState: {
    registrationStatus: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpPostThunks.pending, (state) => {
        state.registrationStatus = null;
      })
      .addCase(signUpPostThunks.fulfilled, (state, action) => {
        state.registrationStatus = null;
      })
      .addCase(signUpPostThunks.rejected, (state, action) => {
        state.registrationStatus = action.payload;
      });
  },
});
