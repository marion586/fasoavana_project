import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@shared/models/response.model'
import { RequestData, ResponseData } from "@shared/models/data.model"
import { CountryModelArray } from "../model/country.model"

const END_POINT = "/countries"

/**
 * @author Onjaniana
 * @description List locations
 * @param RequestData 
 * @returns ApiResponse<ResponseData<EmplacementModelArray>>
 */
export const getCountries= (data:RequestData):Promise<ApiResponse<ResponseData<CountryModelArray>>> => {
    return api.get(END_POINT, {
        params:{...data}
    }).then((response: ApiResponse<ResponseData<CountryModelArray>>) => response).catch((error) => error)
}
