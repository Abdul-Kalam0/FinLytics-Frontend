import axios from "axios";

const API = axios.create({
  baseURL: "https://finlyticsbackend.vercel.app",
  withCredentials: true, // 🔥 IMPORTANT for cookies
});

export default API;
