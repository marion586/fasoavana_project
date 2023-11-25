/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import MaterialService from "../services/_requests";
MaterialService;

export const fetchMaterials = createAsyncThunk(
  "materials/fetchMaterials",
  async () => {
    try {
      const response = await MaterialService.getAllMaterials();
      return response.data;
    } catch (error: any) {
      //throw new Error(error.message);
      return {
        data: [] as any[],
        pagination: {} as any,
        error: new Error(error.message).message,
      };
    }
  }
);
