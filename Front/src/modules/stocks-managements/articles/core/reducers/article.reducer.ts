/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { DataModel, Pagination, RequestData, ResponseData } from "@/shared/models/data.model";
import { ArtilceModelArray } from "../models/article.model";
import { fetchArticles } from "../action";



const initialState : DataModel<ResponseData<ArtilceModelArray>,RequestData & {"identification.reference"?: string | null}> = {
  request: {
    keyword: undefined,
    itemsPerPage: 10,
    page: 1,
    limit: undefined,
    order: undefined,
    sort: undefined,
    "identification.reference": undefined
  },
  response: {
    data: [],
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    setArticleReset: (state) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setArticleRequest: (state, action: {payload: RequestData & {"identification.reference"?: string | null},type:string}) => {
      state.request = {...state.request, ...action.payload}
    },
    setArticleResetRequest: (state) => {
      state.request = {...initialState.request}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
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
 setArticleRequest,
 setArticleResetRequest,
 setArticleReset
} = reducer.actions;

export const articleReducer = reducer.reducer;
