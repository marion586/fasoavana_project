import { Outlet, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import AddMaterial from "./pages/AddMaterial";

import Details from "./pages/details";
import Bottle from "./pages/boite";
const BoitePage = () => {
  return (
    <Routes>
      <Route path="/" Component={Outlet}>
        <Route path="/bottle" Component={Bottle} />
        <Route path="/list" Component={List} />
        <Route path="/create" Component={AddMaterial} />
        <Route path="/edit/:idMaterial" Component={AddMaterial} />
        <Route path="/details-etiquette/:idBoite" Component={Details} />
        <Route index Component={Bottle} />
      </Route>
    </Routes>
  );
};

export default BoitePage;
