import { Outlet, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";

export const BankPage = () => {
  return (
    <Routes>
         <Route path="/" Component={Outlet} >
                <Route path="/list" Component={List}/>
                <Route path="/create" Component={Create} />
                <Route path="/edit/:idBank" Component={Create} />
                <Route index Component={List} />
          </Route>
    </Routes>
  );
};
