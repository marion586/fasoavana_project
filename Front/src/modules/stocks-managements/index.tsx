import { Outlet, Route, Routes } from "react-router-dom";
// import { FamillyPage } from "./familly-sub-famillies";
import { ArticlePage } from "./articles";
import MouvementPage from "./movement";

const StockPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/articles/*" Component={ArticlePage} />
        <Route path="/movement/*" Component={MouvementPage} />
        <Route index Component={ArticlePage} />
      </Route>
    </Routes>
  );
};

export default StockPage
