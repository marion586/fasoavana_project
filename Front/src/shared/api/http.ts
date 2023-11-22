import axios, { AxiosRequestConfig, AxiosError, AxiosStatic } from "axios";
import { BASE_URL } from "./Api_url";
if (localStorage.getItem("token")) {
  (axios as AxiosStatic).defaults.headers.common["Authentication"] =
    localStorage.getItem("token") as string;
} else {
  delete (axios as AxiosStatic).defaults.headers.common["Authentication"];
}
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

/**
 * AXIOS CONFIG
 */
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 200000;
/** */
export class Http {
  static get(url: string, params?: AxiosRequestConfig<any>): Promise<any> {
    try {
      const data = axios.get(url, { params });
      return data;
    } catch (e) {
      console.log(e, "error");
      const error = e as AxiosError;
      throw error.response;
    }
  }

  static async post(
    url: string,
    params?: AxiosRequestConfig<any>
  ): Promise<any> {
    try {
      const { data } = await axios.post(url, params);
      return data;
    } catch (e) {
      const error = e as AxiosError;
      throw error.response;
    }
  }

  static async patch(url: string, data: AxiosRequestConfig<any>): Promise<any> {
    try {
      const { data: any, status } = await axios.patch(url, data);
      if (status === 200) {
        return { data, status };
      }
    } catch (e) {
      const error = e as AxiosError;
      throw error.response;
    }
  }

  static async delete(url: string): Promise<any> {
    try {
      const { data: any, status } = await axios.delete(url);
      if (status === 200) {
        return { status };
      }
    } catch (e) {
      const error = e as AxiosError;
      throw error.response;
    }
  }
}
