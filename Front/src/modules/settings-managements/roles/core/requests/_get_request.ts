import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'
import { DataNotFound, RequestData, ResponseData } from "@/shared/models/data.model"
import { RoleModelArray, RoleModelItem } from "../models/roles.model"

const END_POINT = "/roles"

/**
 * @description List roles
 * @param RequestData 
 * @returns ApiResponse<ResponseData<RoleModelArray>>
 */
export const getRoles= (data:RequestData):Promise<ApiResponse<ResponseData<RoleModelArray>>> => {
    return api.get(END_POINT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<RoleModelArray>>) => response).catch((error) => error)
}

/**
 * @description item role
 * @param id 
 * @returns RoleModelItem | DataNotFound
 */
export const getRole= (id:string): Promise<ApiResponse<RoleModelItem>> => {
    return api.get(`${END_POINT}/${id}`).then((response: ApiResponse<RoleModelItem | DataNotFound>) => response ).catch((error) => error)
}