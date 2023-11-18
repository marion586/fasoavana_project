/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { fetchWarehouses } from "../actions";
import { DataModel, Pagination } from "@/shared/models/data.model";
import { RequestWarehouse, ResponseWarehouse } from "../models/warehouse.model";

const initialState: DataModel<ResponseWarehouse, RequestWarehouse> = {
  request: {
    page: 1,
    label: "",
    itemsPerPage: 10,
  },
  response: {
    data: [],
    pagination: {} as Pagination,
  },
  isLoading: false,
  error: null,
};

const reducer = createSlice({
  name: "warehouse",
  initialState: initialState,
  reducers: {
    setWarehouseReset: (state) => {
      state.request = initialState.request;
      state.response = initialState.response;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
    },
    setWarehouseRequest: (
      state,
      action: { payload: RequestWarehouse; type: string }
    ) => {
      state.request = { ...state.request, ...action.payload };
    },
    setWarehouseResetRequest: (state) => {
      state.request = { ...initialState.request };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWarehouses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWarehouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response;
        state.error = null;
      })
      .addCase(fetchWarehouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.response = {
          data: [],
          pagination: {} as Pagination,
        };
      });
  },
});

export const {
  setWarehouseRequest,
  setWarehouseReset,
  setWarehouseResetRequest,
} = reducer.actions;

export const WarehousesReducer = reducer.reducer;
