/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'
import {  RequestWarehouse, ResponseWarehouse,WarehouseModel } from "../models/warehouse.model"

const GET_WAREHOUSE_LISTS = "/warehouses"


export const getAllWarehouses = (data:RequestWarehouse):Promise<ApiResponse<ResponseWarehouse>> => {
    return api.get(GET_WAREHOUSE_LISTS, {
       params:{...data}
    }).then((response: ApiResponse<ResponseWarehouse>) => response).catch((error) => error)
}

export const getWarehouseById = (id:string):Promise<ApiResponse<WarehouseModel>> => {
    return api.get(`${GET_WAREHOUSE_LISTS}/${id}`).then((response: ApiResponse<WarehouseModel>) => response).catch((error) => error)
}
