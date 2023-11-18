import { Outlet, Route, Routes } from "react-router-dom"
import List from "./page/List"
import Create from "./page/Create"
import Visualization from "@modules/procurement-managements/receiptVoucher/page/Visualization";

const ReceiptVoucher = () => {
  return (
    <Routes>
    <Route path="/" Component={Outlet} >
        <Route path="/list" Component={List} />
        <Route path="/create" Component={Create} />
        <Route path="/visualization/:id" Component={Visualization} />
        <Route index Component={List} />
    </Route>
  </Routes>
  )
}

export default ReceiptVoucher
