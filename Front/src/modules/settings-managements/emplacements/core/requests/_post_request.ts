/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'

const END_POINT = "/locations"

export const postLocation= (data:any):Promise<any> => {
    return api.post(END_POINT, data).then((response: ApiResponse<any>) => response).catch((error) => error)
}

export const putLocation= (data:any,id:string):Promise<any> => {
    return api.patch(END_POINT+'/'+id, data).then((response: ApiResponse<any>) => response).catch((error) => error)
}
