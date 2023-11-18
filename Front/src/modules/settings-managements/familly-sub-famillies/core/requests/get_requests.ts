import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@shared/models/response.model'
import { DataNotFound, ResponseData } from "@shared/models/data.model"
import { FamillyModelArray, FamillyModelItem, RequestFamilly } from "../models/familly.model"

const END_POINT = "/families"

/**
 * @author Onjaniana
 * @description List families
 * @param RequestFamilly 
 * @returns ApiResponse<ResponseData<FammyllyModelArray>>
 */
export const getFamillies = (data:RequestFamilly):Promise<ApiResponse<ResponseData<FamillyModelArray>>> => {
    return api.get(END_POINT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<FamillyModelArray>>) => response).catch((error) => error)
}

/**
 * @author Onjaniana
 * @description item families
 * @param id 
 * @returns FammyllyModelItem | DataNotFound
 */
export const getFamilly= (id:string): Promise<ApiResponse<FamillyModelItem>> => {
    return api.get(`${END_POINT}/${id}`).then((response: ApiResponse<FamillyModelItem | DataNotFound>) => response ).catch((error) => error)
}