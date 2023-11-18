/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'


const DELETE_WAREHOUSE_BY_ID = "/families"

export const deleteFamilly = (id:number):Promise<ApiResponse<any>> => {
    return api.delete(DELETE_WAREHOUSE_BY_ID+"/"+id).then((response: ApiResponse<any>) => response).catch((error) => error)
}
