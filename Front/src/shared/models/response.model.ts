/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type ApiResponse<T> = AxiosResponse<T>;

export type ApiRequest<T> = AxiosRequestConfig & { data?: T };

export interface Response<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

export interface ApiError<E> {
  response?: ApiResponse<E> | ApiResponse<E>;
  request?: any;
  message?: string;
  config: any;
}
