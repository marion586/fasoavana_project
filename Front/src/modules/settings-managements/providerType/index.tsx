import { Outlet, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Create from "./pages/Create";

const ProviderTypePage = () => {
    return (
        <Routes>
             <Route path="/" Component={Outlet} >
                    <Route path="/list" Component={List}/>
                    <Route path="/create" Component={Create} />
                    <Route path="/edit/:idProviderType" Component={Create} />
                    <Route index Component={List} />
              </Route>
        </Routes>
      );
}

export default ProviderTypePage