/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/shared/models/response.model";
import { ConditionModel  } from "../models/condition.model";
import api from "@/shared/api/ApiHelper";
import { AxiosResponse } from "axios";

const ADD_NEW_CONDITIONS = "/conditionings"


export const postNewCondition = (data?: {label:string}): Promise<ApiResponse<ConditionModel>> => {
  return api.post(ADD_NEW_CONDITIONS, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}