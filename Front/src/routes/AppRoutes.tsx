/* eslint-disable @typescript-eslint/no-explicit-any */
//import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import { IAppState } from "../apps/store";
import AuthPage from "../modules/auth/AuthPage";
import App from "../App";
import PrivatesRoutes from "./PrivatesRoutes";

import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, setValidToken } from "@/modules/auth/core/actions";
import { useAppSelector } from "@/apps/hooks/app.hooks";
import { getItemFromLocalStorage } from "@/shared/libs/LocalStorageHelpers";
export const AppRoutes = () => {
  const valideToken = useAppSelector((state) => state.accessTokenState?.valid);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const initAuth = async () => {
      const auth = localStorage.getItem("current_user");
      if (auth != null && auth != undefined) {
        const profileData = JSON.parse(auth);
        dispatch(setCurrentUser(profileData));
        dispatch(setValidToken(true));
      }
    };
    initAuth();
  });
  const data: any = JSON.parse(getItemFromLocalStorage("current_user") || "{}");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {(data?.token || valideToken) && (
            <>
              <Route path="/*" element={<PrivatesRoutes />} />
              <Route index element={<Navigate to="/home" replace={true} />} />
            </>
          )}
          {!localStorage.getItem("current_user") && (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
