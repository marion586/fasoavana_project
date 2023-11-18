/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/shared/models/response.model";
import {  WarehouseModel} from "../models/warehouse.model";
import api from "@/shared/api/ApiHelper";
import { AxiosResponse } from "axios";

const UPDATE_WAREHOUSE = "/warehouses"
export const patchWarehouse = (data: {label:string},id:string): Promise<ApiResponse<WarehouseModel>> => {
  return api.patch(UPDATE_WAREHOUSE+"/"+id, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}
