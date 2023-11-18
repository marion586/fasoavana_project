import { Outlet, Route, Routes } from "react-router-dom";
import { ProviderPage } from "./providers";
import PurchaseOrderPage from "./purchaseOrder";
import ReceiptVoucher from "./receiptVoucher";
import CheckEntry from "./checkEntry";
import { EntryVouchers } from "./entryVouchers";
const ProcurementPage = () => {
  return (
    <Routes>
      <Route path="/" Component={Outlet}>
        <Route path="/providers/*" Component={ProviderPage} />
        <Route path="/purchage-order/*" Component={PurchaseOrderPage} />
        <Route path="/receipt-voucher/*" Component={ReceiptVoucher} />
        <Route path="/check-entry/*" Component={CheckEntry} />
        <Route path="/entry-vouchers/*" Component={EntryVouchers} />
      </Route>
    </Routes>
  );
};

export default ProcurementPage;
