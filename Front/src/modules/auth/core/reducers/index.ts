/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer } from "@reduxjs/toolkit";
import { IAppState } from "../models";
import {
  setCurrentUser,
  toggleTokenRefreshed,
  setValidToken,
  initState,
} from "../actions";

const initialState: IAppState = {
  currentUser: null,
  tokenStatus: false,
  accessTokenState: {
    refreshed: false,
    valid: false,
  },
};

export const userReducer = createReducer(
  initialState.currentUser,
  (builder) => {
    return builder
      .addCase(setCurrentUser, (_state, action) => {
        return action.payload;
      })
      .addCase(initState, () => {
        return null;
      });
  }
);

export const accessTokenReducer = createReducer(
  initialState.accessTokenState,
  (builder) => {
    return builder
      .addCase(toggleTokenRefreshed, (draft: any) => {
        draft.refreshed = !draft.refreshed;
        return;
      })
      .addCase(setValidToken, (draft: any, action) => {
        draft.valid = action.payload;
        return;
      })
      .addCase(initState, (draft: any) => {
        draft.valid = false;
        return;
      });
  }
);
