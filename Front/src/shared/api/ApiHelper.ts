/* eslint-disable @typescript-eslint/no-explicit-any */
import { postRefreshToken } from "@/modules/auth/core/services/_request";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../libs/LocalStorageHelpers";
import axios from "axios";
import { store } from "@/apps/store";
import { setCurrentUser, setValidToken } from "@/modules/auth/core/actions";
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL_DEV,
});

// Intercepteur de requêtes
api.interceptors.request.use((config) => {
  console.log("config unit", config);
  const accesstoken = getItemFromLocalStorage("current_user");
  if (accesstoken) {
    config.headers.Authorization = `Bearer ${JSON.parse(accesstoken).token}`;
  }
  return config;
});

// Intercepteur de réponses
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("error", error);
    const originalRequest = error.config;
    const token: any = getItemFromLocalStorage("current_user");
    const refreshToken = JSON.parse(token)?.refresh_token;
    //store.dispatch(setCurrentUser({}))
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true;
      try {
        // Appeler l'API pour rafraîchir le jeton en utilisant le refreshToken
        const newToken = await postRefreshToken({
          refresh_token: refreshToken,
        });
        console.log(newToken);
        if (newToken.status.toString().includes("2")) {
          setItemToLocalStorage("current_user", JSON.stringify(newToken.data));
          store.dispatch(setCurrentUser(newToken.data));
        }
        return api(originalRequest);
      } catch (error) {
        store.dispatch(setCurrentUser(null));
        store.dispatch(setValidToken(false));
      }
    }
    return Promise.reject(error);
  }
);

export default api;
