/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { DataModel, Pagination, RequestData, ResponseData } from "@/shared/models/data.model";
import { EmplacementModelArray } from "../models/emplacement.model";
import {  fetchEmplacements } from "../action";



const initialState : DataModel<ResponseData<EmplacementModelArray>,RequestData> = {
  request: {
    keyword: undefined,
    itemsPerPage: 10,
    page: 1,
    limit: undefined,
    order: undefined,
    sort: undefined
  },
  response: {
    data: [],
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "emplacement",
  initialState: initialState,
  reducers: {
    setEmplacementReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setEmplacementRequest: (state, action: {payload: RequestData,type:string}) => {
      state.request = {...state.request, ...action.payload}
    },
    setEmplacementResetRequest: (state) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmplacements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEmplacements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchEmplacements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.response =  {
          data: [] ,
          pagination: {} as Pagination
        };
      });
  },
});

export const {
 setEmplacementRequest,
 setEmplacementReset,
 setEmplacementResetRequest
} = reducer.actions;

export const emplacementReducer = reducer.reducer;
