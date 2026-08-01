import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.vite_api_url || "http://localhost:5001",
  withCredentials: true,
});
