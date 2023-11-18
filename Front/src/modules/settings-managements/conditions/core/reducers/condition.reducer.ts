/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { fetchConditions } from "../actions";
import { DataModel, Pagination } from "@/shared/models/data.model";
import { RequestCondition, ResponseCondition } from "../models/condition.model";




const initialState : DataModel<ResponseCondition ,RequestCondition> = {
  request: {
    "order[id]": "ASC",
     abbreviation:undefined,
    keyword: "",
    page: 1,
    itemsPerPage: 10,
    // sort: undefined,
  },
  response: {
    data: [],
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "conditions",
  initialState: initialState,
  reducers: {
    setConditionReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setConditionRequest: (state, action: {payload: RequestCondition,type:string}) => {
      state.request = {...state.request, ...action.payload}
    },
    setConditionResetRequest: (state) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConditions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchConditions.rejected, (state, action) => {
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
 setConditionRequest,
 setConditionReset,
 setConditionResetRequest
} = reducer.actions;

export const conditionsReducer = reducer.reducer;
