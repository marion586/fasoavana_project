/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination } from "@/shared/models/data.model";
import { BankModel, RequestBank } from "../models/bank.model";
import { getAllBanks } from "../requests/get_requests";


export const fetchBanks= createAsyncThunk(
    'banks/fetchBanks',
    async (request: RequestBank) => {
      try {
        const response = await getAllBanks(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as BankModel[] ,
            pagination: {} as Pagination,
            error: new Error(error.message).message
        }
      }
    }
  );