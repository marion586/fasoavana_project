import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@shared/models/response.model'
import { DataNotFound, RequestData, ResponseData } from "@shared/models/data.model"
import { EmplacementModelArray, EmplacementModelItem } from "../models/emplacement.model"

const END_POINT = "/locations"

/**
 * @author Onjaniana
 * @description List locations
 * @param RequestData 
 * @returns ApiResponse<ResponseData<EmplacementModelArray>>
 */
export const getLocations= (data:RequestData):Promise<ApiResponse<ResponseData<EmplacementModelArray>>> => {
    return api.get(END_POINT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<EmplacementModelArray>>) => response).catch((error) => error)
}

/**
 * @author Onjaniana
 * @description item locations
 * @param id 
 * @returns EmplacementModelItem | DataNotFound
 */
export const getLocation= (id:string): Promise<ApiResponse<EmplacementModelItem>> => {
    return api.get(`${END_POINT}/${id}`).then((response: ApiResponse<EmplacementModelItem | DataNotFound>) => response ).catch((error) => error)
}