import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(ctx?: any) {
  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  const { "@front-e-commerce:token": token } = parseCookies(ctx);
  if (token) {
    api.defaults.headers["Authorization"] = "Bearer " + token;
  }

  return api;
}
