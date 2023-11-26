import { Outlet, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import AddMaterial from "./pages/AddMaterial";
import DetailsMaterials from "./pages/detailsMaterials";
import Bottle from "./pages/boite";
const BoitePage = () => {
  return (
    <Routes>
      <Route path="/" Component={Outlet}>
        <Route path="/bottle" Component={Bottle} />
        <Route path="/list" Component={List} />
        <Route path="/create" Component={AddMaterial} />
        <Route path="/edit/:idMaterial" Component={AddMaterial} />
        <Route path="details/:idMaterial" Component={DetailsMaterials} />
        <Route index Component={Bottle} />
      </Route>
    </Routes>
  );
};

export default BoitePage;
