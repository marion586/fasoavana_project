/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'
import {  BankModel, RequestBank, ResponseBank } from "../models/bank.model"

const GET_BANKS_LIST = "/banks"
const GET_COUNTRIES_LIST = "/countries"
const GET_CIVILITIES_LIST = "/civilities"

export const getAllBanks = (data:RequestBank):Promise<ApiResponse<ResponseBank>> => {
    return api.get(GET_BANKS_LIST, {
       params:{...data}
    }).then((response: ApiResponse<ResponseBank>) => response).catch((error) => error)
}

export const getAllCountries = (params?:any):Promise<ApiResponse<any>> => {
    return api.get(GET_COUNTRIES_LIST, {
        params: {...params}
    }).then((response: ApiResponse<any>) => response).catch((error) => error)
}

export const getAllCivilities = ():Promise<ApiResponse<any>> => {
    return api.get(GET_CIVILITIES_LIST).then((response: ApiResponse<any>) => response).catch((error) => error)
}

export const getBankById = (id:string):Promise<ApiResponse<BankModel>> => {
    return api.get(GET_BANKS_LIST+"/"+id).then((response: ApiResponse<BankModel>) => response).catch((error) => error)
}
