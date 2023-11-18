/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { DataModel, Pagination, RequestData, ResponseData } from "@/shared/models/data.model";
import { RoleModelArray } from "../models/roles.model";
import {  fetchRoles } from "../action";



const initialState : DataModel<ResponseData<RoleModelArray>,RequestData> = {
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
  name: "roles",
  initialState: initialState,
  reducers: {
    setRoleReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setRoleRequest: (state, action: {payload: RequestData,type:string}) => {
      state.request = {...state.request, ...action.payload}
    },
    setRoleResetRequest: (state) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
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
 setRoleRequest,
 setRoleReset,
 setRoleResetRequest
} = reducer.actions;

export const roleReducer = reducer.reducer;
