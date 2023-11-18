/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination } from "@/shared/models/data.model";
import { RequestUnit  ,UnitModelArray } from "../models/unit.model";
import { getUnits } from "../requests/get_requests";

export const fetchUnits= createAsyncThunk(
    'unit/fetchUnits',
    async (request: RequestUnit) => {
      try {
        const response = await getUnits(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as UnitModelArray,
            pagination: {} as Pagination,
            error: new Error(error.message)?.message
        }
      }
    }
  );