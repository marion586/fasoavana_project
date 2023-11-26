/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMaterials, fetchBoites } from "../actions";
import { DataModel, Pagination } from "@/shared/models/data.model";
import { RequestBank, ResponseBank } from "../models/bank.model";

const initialState: any = {
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
  boite: {},
  isLoading: false,
  error: null,
};

const reducer = createSlice({
  name: "boites",
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
    setMateriels: (state: any, action) => {
      state.response.data = state.response.data.filter(
        (d: any) => d._id === action.payload
      );
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
      })
      .addCase(fetchBoites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBoites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boite = action.payload ?? initialState.response;
        state.error = null;
      })
      .addCase(fetchBoites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.boite = {
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
  setMateriels,
} = reducer.actions;

export const boitesReducer = reducer.reducer;
