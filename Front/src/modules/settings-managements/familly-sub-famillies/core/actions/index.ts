/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination } from "@/shared/models/data.model";
import { RequestFamilly  ,FamillyModelArray } from "../models/familly.model";
import { getFamillies } from "../requests/get_requests";



export const fetchFamillies= createAsyncThunk(
    'familly/fetchFammily',
    async (request: RequestFamilly) => {
      try {
        const response = await getFamillies(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as FamillyModelArray ,
            pagination: {} as Pagination,
            error: new Error(error.message)?.message
        }
      }
    }
  );