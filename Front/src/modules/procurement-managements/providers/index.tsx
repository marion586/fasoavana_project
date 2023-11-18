import { Outlet, Route, Routes } from "react-router"
import List from "./page/List"

export const ProviderPage = () => {
  return (
    <Routes>
      <Route path="/" Component={Outlet} >
          <Route path="/list" Component={List} />
          <Route path="/list/article/:idArcticle" Component={List} />
          <Route index Component={List} />
      </Route>
    </Routes>
  )
}
