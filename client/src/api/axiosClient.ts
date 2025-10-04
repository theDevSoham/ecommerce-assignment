// src/api/axiosClient.ts
import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // backend server
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
