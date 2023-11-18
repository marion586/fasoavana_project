/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/shared/models/response.model";
import {  ConditionModel} from "../models/condition.model";
import api from "@/shared/api/ApiHelper";
import { AxiosResponse } from "axios";

const UPDATE_CONDITIONS = "/conditionings"
export const patchCondition = (data: {label:string},id:string): Promise<ApiResponse<ConditionModel>> => {
  return api.patch(UPDATE_CONDITIONS+"/"+id, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}
