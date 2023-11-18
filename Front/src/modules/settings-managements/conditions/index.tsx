import { Outlet, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";

export const ConditionsPages = () => {
  return (
    <Routes>
         <Route path="/" Component={Outlet} >
                <Route path="/list" Component={List}/>
                <Route path="/create" Component={Create} />
                <Route path="/edit/:idConditions" Component={Create} />
                <Route index Component={List} />
          </Route>
    </Routes>
  );
};
