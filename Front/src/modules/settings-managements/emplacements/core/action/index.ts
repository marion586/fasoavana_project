/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination, RequestData } from "@/shared/models/data.model";
import { getLocations } from "../requests/_get_request";
import { EmplacementModelArray } from "../models/emplacement.model";



export const fetchEmplacements= createAsyncThunk(
    'emplacement/fetchEmplacements',
    async (request: RequestData) => {
      try {
        const response = await getLocations(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as EmplacementModelArray ,
            pagination: {} as Pagination,
            error: new Error(error.message)?.message
        }
      }
    }
  );