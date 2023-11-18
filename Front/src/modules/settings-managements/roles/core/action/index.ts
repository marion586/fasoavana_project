/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination, RequestData } from "@/shared/models/data.model";
import { getRoles } from "../requests/_get_request";
import { RoleModelArray } from "../models/roles.model";



export const fetchRoles= createAsyncThunk(
    'roles/fetchRoles',
    async (request: RequestData) => {
      try {
        const response = await getRoles(request) 
        return response.data;
      } catch (error: any ) {
        //throw new Error(error.message);
        return {
            data: [] as RoleModelArray ,
            pagination: {} as Pagination,
            error: new Error(error.message).message
        }
      }
    }
  );