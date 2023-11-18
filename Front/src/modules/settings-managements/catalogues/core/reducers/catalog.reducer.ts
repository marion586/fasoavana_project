/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCatalogs } from "../actions";
import { DataModel, Pagination, ResponseData } from "@/shared/models/data.model";
import { RequestCatalogue, CatalogueModelArray } from "../models/catalogue.model";


const initialState : DataModel<ResponseData<CatalogueModelArray> ,RequestCatalogue> = {
  request: {
    page: 1,
    label: "",
    itemsPerPage: 10,
  },
  response: {
    data: [],
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "catalog",
  initialState: initialState,
  reducers: {
    setCatalogReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setCatalogRequest: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.request>) => {
      state.request = {...state.request, ...action.payload}
    },
    setCatalogResetRequest: (state: Draft<typeof initialState>) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchCatalogs.rejected, (state, action) => {
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
 setCatalogRequest,
 setCatalogReset,
 setCatalogResetRequest
} = reducer.actions;

export const catalogReducer = reducer.reducer;
