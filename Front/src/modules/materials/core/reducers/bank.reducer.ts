/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMaterials } from "../actions";
import { DataModel, Pagination } from "@/shared/models/data.model";
import { RequestBank, ResponseBank } from "../models/bank.model";

const initialState: DataModel<ResponseBank, RequestBank> = {
  request: {
    keyword: "",
    itemsPerPage: 10,
    page: 1,
    "bankContacts.firstname": undefined,
    country: undefined,
    abbreviation: undefined,
    // sort: undefined,
    "order[id]": "ASC",
  },
  response: {
    data: [],
    pagination: {} as Pagination,
  },
  isLoading: false,
  error: null,
};

const reducer = createSlice({
  name: "banks",
  initialState: initialState,
  reducers: {
    setBankReset: (state: Draft<typeof initialState>) => {
      state.request = initialState.request;
      state.response = initialState.response;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
    },
    setBankRequest: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.request>
    ) => {
      //{payload: RequestBank,type:string}
      state.request = { ...state.request, ...action.payload };
    },
    setBankResetRequest: (state: Draft<typeof initialState>) => {
      state.request = { ...initialState.request };
    },
    setLoadingRequest: (state: any, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaterials.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMaterials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response;
        state.error = null;
      })
      .addCase(fetchMaterials.rejected, (state, action) => {
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
  setBankRequest,
  setBankReset,
  setBankResetRequest,
  setLoadingRequest,
} = reducer.actions;

export const materialsReducer = reducer.reducer;
