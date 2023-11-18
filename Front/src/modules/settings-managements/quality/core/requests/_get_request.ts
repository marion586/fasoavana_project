/* eslint-disable @typescript-eslint/no-explicit-any */
//import {AxiosResponse} from 'axios'
import api from "@shared/api/ApiHelper"
import { QualityModel, ResponseQuality } from '../models/quality_model'
import { ApiResponse } from '@/shared/models/response.model'

const GET_QUALITIES_LIST = "/qualities"
const GET_QUALITY = "/qualities/"


export const getAllQualities = (data:any):Promise<ApiResponse<ResponseQuality>> => {
    return api.get(GET_QUALITIES_LIST, {
        params:{...data}
    }).then((response: ApiResponse<ResponseQuality>) => response).catch((error) => error)
}

export const getQuality= (id:string): Promise<ApiResponse<QualityModel>> => {
    return api.get(`${GET_QUALITY}${id}`).then((response: ApiResponse<QualityModel>) => response).catch((error) => error)
}