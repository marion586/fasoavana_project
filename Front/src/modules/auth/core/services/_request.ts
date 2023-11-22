/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import api from "@/shared/api/ApiHelper";
import { Http } from "@/shared/api/http";
const POST_LOGIN = "/auth/connection";

export default class authService {
  static async postLogin(data: any): Promise<any> {
    return await Http.post(POST_LOGIN, data);
  }
}

const REFRESH_TOKEN = "api/token/refresh";

export const postLogin = (data: any): Promise<any> => {
  return api
    .post(POST_LOGIN, data)
    .then((response: AxiosResponse<any>) => response)
    .catch((error) => error);
};

export const postRefreshToken = (data: any): Promise<any> => {
  return axios
    .post(import.meta.env.VITE_APP_API_URL_PROD + "/" + REFRESH_TOKEN, data)
    .then((response: AxiosResponse<any>) => response)
    .catch((error) => error);
};
