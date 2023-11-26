import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MasterLayout from "@/shared/layouts/MasterLayout";
import { SuspenseView } from "@/shared/components/SuspenseView";
import AlertPage from "@/modules/alerts";
//import ProcurementPage from '@/modules/procurement-managements'

const PrivatesRoutes = () => {
  const MaterialsPage = lazy(() => import("../modules/materials"));
  const SettingPage = lazy(() => import("../modules/settings-managements"));
  const StockPage = lazy(() => import("../modules/stocks-managements"));
  const HomePage = lazy(() => import("../modules/home"));
  const BoitePage = lazy(() => import("../modules/boite"));
  const EtiquettePage = lazy(() => import("../modules/etiquette"));
  const ProcurementPage = lazy(
    () => import("@/modules/procurement-managements")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/home" replace={true} />} />
        <Route
          path="/"
          element={
            <SuspenseView>
              <HomePage />
            </SuspenseView>
          }
        />
        <Route
          path="/materials/*"
          element={
            <SuspenseView>
              <MaterialsPage />
            </SuspenseView>
          }
        />
        <Route
          path="/boite/*"
          element={
            <SuspenseView>
              <BoitePage />
            </SuspenseView>
          }
        />
        <Route
          path="/etiquette/*"
          element={
            <SuspenseView>
              <EtiquettePage />
            </SuspenseView>
          }
        />
        <Route
          path="/home"
          element={
            <SuspenseView>
              <HomePage />
            </SuspenseView>
          }
        />

        <Route
          path="alerts/*"
          element={
            <SuspenseView>
              <AlertPage />
            </SuspenseView>
          }
        />
        <Route
          path="procurement/*"
          element={
            <SuspenseView>
              <ProcurementPage />
            </SuspenseView>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrivatesRoutes;
