import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const signUpPostThunks = createAsyncThunk(
  "auth/signUpPostThunks",
  async ({ userData, navigate }, { rejectWithBalue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      console.log(data);
      navigate("/login");

      return data;
    } catch (error) {
      return rejectWithBalue(error.response.data.message);
    }
  }
);

export const signInPostThunks = createAsyncThunk(
  "auth/signInPostThunks",
  async ({ userData, navigate }, { rejectWithBalue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);
      localStorage.setItem("auth", JSON.stringify(data));

      navigate("/");
    } catch (error) {
      return rejectWithBalue(error.response.data.message);
    }
  }
);
