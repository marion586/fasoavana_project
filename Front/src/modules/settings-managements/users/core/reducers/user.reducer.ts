/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions";
import { DataModel, Pagination } from "@/shared/models/data.model";
import { RequestUser, ResponseUser } from "../models/user_model";



const initialState : DataModel<ResponseUser,RequestUser> = {
  request: {
    keyword: "",
    limit: 10,
    page: 1,
    sort: "ASC",
    order: "name"
  },
  response: {
    data: [] ,
    pagination: {} as Pagination
  },
  isLoading: false,
  error: null,
}

const reducer = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUserReset: (state:Draft<typeof initialState>) => {
      state.request = initialState.request
      state.response = initialState.response
      state.error = initialState.error
      state.isLoading = initialState.isLoading
    },
    setUserRequest: (state:Draft<typeof initialState>, action: PayloadAction<typeof initialState.request> /*{payload: RequestUser,type:string}*/) => {
      state = {...state, ...action.payload}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload ?? initialState.response
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
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
  setUserRequest,
  setUserReset,
} = reducer.actions;

export const usersReducer = reducer.reducer;
