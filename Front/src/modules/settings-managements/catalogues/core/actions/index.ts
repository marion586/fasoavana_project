/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination } from "@/shared/models/data.model";
import { RequestCatalogue  ,CatalogueModelArray } from "../models/catalogue.model";
import { getCatalogs } from "../requests/get_requests";



export const fetchCatalogs= createAsyncThunk(
    'catalog/fetchCatalog',
    async (request: RequestCatalogue) => {
      try {
        const response = await getCatalogs(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as CatalogueModelArray ,
            pagination: {} as Pagination,
            error: new Error(error.message)?.message
        }
      }
    }
  );