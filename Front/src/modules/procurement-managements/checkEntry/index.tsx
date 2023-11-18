import { Outlet, Routes, Route } from "react-router-dom";
import Details from "./page/Details";
import List from "./page/List";
const CheckEntry = () => {
  return (
    <Routes>
      <Route path="/" Component={Outlet}>
        <Route path="/list" Component={List} />
        <Route path="/details/:id" Component={Details} />
        <Route index Component={List} />
      </Route>
    </Routes>
    
  );
};

export default CheckEntry;
