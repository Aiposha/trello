import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://9571a46d7d20d793.mokky.dev",
  timeout: 8000,
  headers: { Accept: "application/json" },
});
