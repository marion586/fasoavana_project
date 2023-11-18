import { Outlet, Route, Routes } from "react-router"
import List from "./pages/List"
import Visualization from "./pages/Visualization"
export const EntryVouchers = () => {
  return (
    <Routes>
      <Route path="/" Component={Outlet} >
          <Route path="/list" Component={List} />
          <Route path="/visualization/:id" Component={Visualization} />
          <Route index Component={List} />
      </Route>
    </Routes>
  )
}
