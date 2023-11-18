/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination, RequestData } from "@/shared/models/data.model";
import { getCountries } from "../requests";
import { CountryModelArray } from "../model/country.model";



export const fetchCountry= createAsyncThunk(
    'country/fetchCountry',
    async (request: RequestData) => {
      try {
        const response = await getCountries(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as CountryModelArray ,
            pagination: {} as Pagination,
            error: new Error(error.message)?.message
        }
      }
    }
  );