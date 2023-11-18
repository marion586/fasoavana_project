import { Outlet, Route, Routes } from "react-router"
import { List } from "./page/List"
import { Create } from "./page/Create"

export const CataloguePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
          <Route path="/" element={<List />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:catalogId" element={<Create />} />
      </Route>
    </Routes>
  )
}
