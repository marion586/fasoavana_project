/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUnits } from "../actions";
import { DataModel, Pagination, ResponseData } from "@/shared/models/data.model";
import { RequestUnit, UnitModelArray } from "../models/unit.model";


const initialState : DataModel<ResponseData<UnitModelArray> ,RequestUnit> = {
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
    setUnitResetRequest: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setUnitRequest: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.request>) => {
      state.request = {...state.request, ...action.payload}
    },
    setUnitReset: (state: Draft<typeof initialState>) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnits.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUnits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchUnits.rejected, (state, action) => {
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
 setUnitRequest,
 setUnitReset,
 setUnitResetRequest
} = reducer.actions;

export const unitReducer = reducer.reducer;
