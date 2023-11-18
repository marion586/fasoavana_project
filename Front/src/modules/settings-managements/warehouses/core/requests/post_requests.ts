/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/shared/models/response.model";
import { WarehouseModel  } from "../models/warehouse.model";
import api from "@/shared/api/ApiHelper";
import { AxiosResponse } from "axios";

const ADD_NEW_WAREHOUSE = "/warehouses"


export const postNewWarehouse = (data?: {label:string}): Promise<ApiResponse<WarehouseModel>> => {
  return api.post(ADD_NEW_WAREHOUSE, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}