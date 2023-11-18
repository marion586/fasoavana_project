/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination, RequestData } from "@/shared/models/data.model";
import { getAllArticles } from "../requests/_get_request";
import { ArtilceModelItem } from "../models/article.model";



export const fetchArticles= createAsyncThunk(
    'articles/fetchBanks',
    async (request: RequestData) => {
      try {
        const response = await getAllArticles(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as ArtilceModelItem[] ,
            pagination: {} as Pagination,
            error: new Error(error.message).message
        }
      }
    }
  );