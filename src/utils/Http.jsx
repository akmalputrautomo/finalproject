import axios from "axios";
import { CookieStorage, CookieKeys } from "./cookies";

// const Token = CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : "";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    // Authorization: `${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
    Authorization : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzAzNjEzMDEyfQ.vuhNGzh13bKuAH0eQBqmNQQ-SPmK9j-Pi8L5oN4rOyg`,
  };
  return config;
});

export default http;
