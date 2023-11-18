/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { fetchQualities } from "../actions";
import { DataModel, Pagination } from "@/shared/models/data.model";
import { QualityModel, RequestQuality, ResponseQuality } from "../models/quality_model";



const initialState : DataModel<ResponseQuality,RequestQuality> = {
  request: {
    keyword: "",
    limit: 10,
    page: 1,
    sort: "name",
    order: "ASC"
  },
  response: {
    data: [] as QualityModel[] ,
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "qualities",
  initialState: initialState,
  reducers: {
    setQualityReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setQualityRequest: (state, action: {payload: RequestQuality,type:string}) => {
      state.request = {...state.request, ...action.payload}
    },
    setQualityResetRequest: (state) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQualities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQualities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchQualities.rejected, (state, action) => {
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
  setQualityReset,
  setQualityRequest,
  setQualityResetRequest
} = reducer.actions;

export const qualitiesReducer = reducer.reducer;
