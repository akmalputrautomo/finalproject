import axios from "axios";
import { CookieStorage, CookieKeys } from "./cookies";

const getToken = CookieStorage.get(CookieKeys.TokenKu) ? CookieStorage.get(CookieKeys.TokenKu) : "";

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
    Authorization: `Bearer ${getToken ? getToken : ""}`,
  };

  return config;
});

export default http;
