/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllQualities } from "../requests/_get_request";
import { QualityModel } from "../models/quality_model";
import { Pagination } from "@/shared/models/data.model";


export const fetchQualities = createAsyncThunk(
    'qualities/fetchQualities',
    async ({ page, keyword,limit, }: { page: number; keyword: string,limit:number }) => {
      try {
        const response = await getAllQualities({ page,limit,keyword:keyword }) 
        return response.data;
      } catch (error: any ) {
       // throw new Error(error.message);
        return {
            data: [] as QualityModel[] ,
            pagination: {} as Pagination,
            error: new Error(error.message).message
        }
      }
    }
  );