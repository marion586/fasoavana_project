import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@shared/models/response.model'
import { DataNotFound, ResponseData } from "@shared/models/data.model"
import { CatalogueModelArray, CatalogueModelItem, RequestCatalogue } from "../models/catalogue.model"

const END_POINT = "/catalogs"

/**
 * @author Onjaniana
 * @description List catalogs
 * @param RequestCatalogue 
 * @returns ApiResponse<ResponseData<CatalogueModelArray>>
 */
export const getCatalogs = (data:RequestCatalogue):Promise<ApiResponse<ResponseData<CatalogueModelArray>>> => {
    return api.get(END_POINT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<CatalogueModelArray>>) => response).catch((error) => error)
}

/**
 * @author Onjaniana
 * @description item catalog
 * @param id 
 * @returns CatalogueModelItem | DataNotFound
 */
export const getCatalog= (id:string): Promise<ApiResponse<CatalogueModelItem>> => {
    return api.get(`${END_POINT}/${id}`).then((response: ApiResponse<CatalogueModelArray | DataNotFound>) => response ).catch((error) => error)
}