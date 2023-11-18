/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'
import {  RequestCondition, ResponseCondition,ConditionModel } from "../models/condition.model"

const GET_CONDITION_LISTS = "/conditionings"


export const getAllConditions = (data:RequestCondition):Promise<ApiResponse<ResponseCondition>> => {
    return api.get(GET_CONDITION_LISTS, {
       params:{...data}
    }).then((response: ApiResponse<ResponseCondition>) => response).catch((error) => error)
}

export const getConditionByID = (id:string):Promise<ApiResponse<ConditionModel>> => {
    return api.get(`${GET_CONDITION_LISTS}/${id}`).then((response: ApiResponse<ConditionModel>) => response).catch((error) => error)
}
