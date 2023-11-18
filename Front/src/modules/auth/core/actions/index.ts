import { createAction } from "@reduxjs/toolkit";
import { UserModel } from "../models";

export const setCurrentUser = createAction<UserModel | null>("user/setCurrent");
export const initState = createAction<UserModel | null>("user/initState");
export const toggleTokenRefreshed = createAction("token/toggleRefresh");
export const setValidToken = createAction<boolean>("token/valid");
