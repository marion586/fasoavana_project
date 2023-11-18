/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination } from "@/shared/models/data.model";
import { RequestWarehouse  ,WarehouseModel } from "../models/warehouse.model";
import { getAllWarehouses } from "../requests/get_requests";



export const fetchWarehouses= createAsyncThunk(
    'warehouse/fetchWarehouses',
    async (request: RequestWarehouse) => {
      try {
        const response = await getAllWarehouses(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as WarehouseModel[] ,
            pagination: {} as Pagination,
            error: new Error(error.message).message
        }
      }
    }
  );