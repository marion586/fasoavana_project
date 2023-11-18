/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchFamillies } from "../actions";
import { DataModel, Pagination, ResponseData } from "@/shared/models/data.model";
import { RequestFamilly, FamillyModelArray } from "../models/familly.model";


const initialState : DataModel<ResponseData<FamillyModelArray> ,RequestFamilly> = {
  request: {
    page: 1,
    label: "",
    itemsPerPage: 10,
    "exists[parent]": undefined
  },
  response: {
    data: [],
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "familly",
  initialState: initialState,
  reducers: {
    setFamillyReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setFamillyRequest: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.request>) => {
      state.request = {...state.request, ...action.payload}
    },
    setFamillyResetRequest: (state: Draft<typeof initialState>) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFamillies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFamillies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchFamillies.rejected, (state, action) => {
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
 setFamillyRequest,
 setFamillyReset,
 setFamillyResetRequest
} = reducer.actions;

export const famillyReducer = reducer.reducer;
