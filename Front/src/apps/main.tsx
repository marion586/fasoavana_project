//import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "@shared/assets/styles/_main.scss";
import { store } from "./store.tsx";
import { AppRoutes } from "@routes/AppRoutes.tsx";
import TranslateProvider from "@shared/i18n/core/TranslateProvider.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 
  <>
  <Provider store={store}>
      <TranslateProvider>
          <AppRoutes />
          <ToastContainer />
      </TranslateProvider>
    </Provider>
  </>  

);
 {/*</React.StrictMode>*/} {/*</React.StrictMode>*/}