import { Outlet, Route, Routes } from "react-router-dom"
import List from "./page/List"
import Create from "./page/Create"

const PurchaseOrderPage = () => {
  return (
    <Routes>
    <Route path="/" Component={Outlet} >
        <Route path="/list" Component={List} />
        <Route path="/create" Component={Create} />
        <Route index Component={List} />
    </Route>
  </Routes>
  )
}

export default PurchaseOrderPage
