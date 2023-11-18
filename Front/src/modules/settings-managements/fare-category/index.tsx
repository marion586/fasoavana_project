import { Outlet, Route, Routes } from "react-router"
import { List } from "./page/List"
import { Create } from "./page/Create"
import { Edit } from "./page/Edit"

export const FareCategoryPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
          <Route path="/" element={<List />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:userId" element={<Edit />} />
      </Route>
    </Routes>
  )
}
