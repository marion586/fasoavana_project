import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'
import { DataNotFound, RequestData, ResponseData } from "@/shared/models/data.model"
import { ArtilceModelArray, ArtilceModelItem, StockTrackingArray, TypeSalePriceArray } from "../models/article.model"

const END_POINT = "/articles"
const END_POINT_STOCK_TRACKING ="/suivi_stocks"
const END_POINT_TYPE_SALE_PRICE ="/prix_vente_types"

/**
 * 
 * @param RequestData 
 * @returns ApiResponse<ResponseData<ArtilceModelArray>>
 */
export const getAllArticles = (data:RequestData):Promise<ApiResponse<ResponseData<ArtilceModelArray>>> => {
    return api.get(END_POINT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<ArtilceModelArray>>) => response).catch((error) => error)
}

/**
 * 
 * @param id 
 * @returns ArtilceModelItem | DataNotFound
 */
export const getArticle= (id:string): Promise<ApiResponse<ArtilceModelItem>> => {
    return api.get(`${END_POINT}${id}`).then((response: ApiResponse<ArtilceModelItem | DataNotFound>) => response.data ).catch((error) => error)
}

/**
 * 
 * @param RequestData 
 * @returns ApiResponse<ResponseData<StockTrackingArray>>
 */
export const getAllStockTracking = (data:RequestData):Promise<ApiResponse<ResponseData<StockTrackingArray>>> => {
    return api.get(END_POINT_STOCK_TRACKING, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<StockTrackingArray>>) => response).catch((error) => error)
}

/**
 * 
 * @param RequestData 
 * @returns ApiResponse<ResponseData<TypeSalePriceArray>>
 */
export const getAllTypeSalePrice = (data:RequestData):Promise<ApiResponse<ResponseData<TypeSalePriceArray>>> => {
    return api.get(END_POINT_TYPE_SALE_PRICE, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<TypeSalePriceArray>>) => response).catch((error) => error)
}