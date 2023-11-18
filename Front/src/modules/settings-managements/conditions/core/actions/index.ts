/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination } from "@/shared/models/data.model";
import { ConditionModel ,RequestCondition } from "../models/condition.model";
import { getAllConditions } from "../requests/get_requests";



export const fetchConditions= createAsyncThunk(
    'conditions/fetchConditions',
    async (request: RequestCondition) => {
      try {
        const response = await getAllConditions(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as ConditionModel[] ,
            pagination: {} as Pagination,
            error: new Error(error.message).message
        }
      }
    }
  );