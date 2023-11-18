import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@shared/models/response.model'
import { DataNotFound, ResponseData } from "@shared/models/data.model"
import { UnitModelItem, UnitModelArray, RequestUnit } from "../models/unit.model"
import { END_POINT_SALE_UNIT } from "@/shared/constants/constants"


/**
 * @author Onjaniana
 * @description List catalogs
 * @param RequestCatalogue 
 * @returns ApiResponse<ResponseData<UnitModelArray>>
 */
export const getUnits = (data:RequestUnit):Promise<ApiResponse<ResponseData<UnitModelArray>>> => {
    return api.get(END_POINT_SALE_UNIT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<UnitModelArray>>) => response).catch((error) => error)
}

/**
 * @author Onjaniana
 * @description item catalog
 * @param id 
 * @returns UnitModelItem | DataNotFound
 */
export const getUnit= (id:string): Promise<ApiResponse<UnitModelItem>> => {
    return api.get(`${END_POINT_SALE_UNIT}/${id}`).then((response: ApiResponse<UnitModelItem | DataNotFound>) => response ).catch((error) => error)
}