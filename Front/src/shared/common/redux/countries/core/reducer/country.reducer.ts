/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, createSlice } from "@reduxjs/toolkit";
import { DataModel, Pagination, RequestData, ResponseData } from "@/shared/models/data.model";
import { CountryModelArray } from "../model/country.model";
import {  fetchCountry } from "../action";



const initialState : DataModel<ResponseData<CountryModelArray>,RequestData> = {
  request: {
    keyword: undefined,
    itemsPerPage: 256,
    page: 1,
    limit: undefined,
    order: undefined,
    sort: undefined
  },
  response: {
    data: [] as CountryModelArray,
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    setCountryReset: (state: Draft<typeof initialState>) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setCountryRequest: (state, action: {payload: RequestData,type:string}) => {
      state.request = {...state.request, ...action.payload}
    },
    setCountryResetRequest: (state) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.response =  {
          data: [] as CountryModelArray ,
          pagination: {} as Pagination
        };
      });
  },
});

export const {
 setCountryRequest,
 setCountryReset,
 setCountryResetRequest
} = reducer.actions;

export const countryReducer = reducer.reducer;
