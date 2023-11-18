/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../requests/_get_request";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async ({ page, keyword,limit, }: { page: number; keyword: string,limit:number }) => {
      try {
        const response = await getAllUsers({ page,limit,keyword:keyword }) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
          data: {users: [] as any[],total: 100, skip: 0, limit: 30},
          page: 1,
          isLoading: false,
          sort: "name",
          keyword:"",
          error: error.message || "erreur de serveur",
          limit: 5
        }
      }
    }
  );