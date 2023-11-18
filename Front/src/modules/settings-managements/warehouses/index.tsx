import { Outlet, Route, Routes } from "react-router-dom"
import { List } from "./pages/List"
import { Create } from "./pages/Create"

export const WarehousePage = () => {
    return (
      <Routes>
        <Route path="/" element={<Outlet />}>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:idWarehouse" element={<Create />} />
        </Route>
      </Routes>
    )
  }