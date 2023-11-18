import { Outlet, Route, Routes } from "react-router"
import { List } from "./page/List"
import { Create } from "./page/Create"

export const RolePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
          <Route path="/" element={<List />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:roleId" element={<Create />} />
      </Route>
    </Routes>
  )
}
