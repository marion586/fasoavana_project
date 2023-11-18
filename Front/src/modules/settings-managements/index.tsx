import { Outlet, Route, Routes } from "react-router"
import { UserPage } from "./users"
import { BankPage } from "./banks"
import { RolePage } from "./roles"
import { QualityPage } from "./quality"
import { CataloguePage } from "./catalogues"
import { FareCategoryPage } from "./fare-category"
import { UnitPage } from "./units"
import { WarehousePage } from "./warehouses"
import { EmplacementPage } from "./emplacements"
import { IncotermPage } from "./incoterms"
import { CurrencyPage } from "./currency"
import ProviderTypePage from "./providerType"
import { ConditionsPages } from "./conditions"
import { FamillyPage } from "./familly-sub-famillies"

const SettingPage = () => {
  return (
    <Routes>
        <Route path="/" element={<Outlet />}>
            <Route path="/user/*" Component={UserPage} />
            <Route path="/bank/*" Component={BankPage} />
            <Route path="/role/*" Component={RolePage} />
            <Route path="/quality/*" Component={QualityPage} />
            <Route path="/catalogues/*" Component={CataloguePage} />
            <Route path="/fare-category/*" Component={FareCategoryPage} />
            <Route path="/units/*" Component={UnitPage} />
            <Route path="/warehouse/*" Component={WarehousePage} />
            <Route path="/emplacements/*" Component={EmplacementPage} />
            <Route path="/icoterms/*" Component={IncotermPage}/>
            <Route path="/currency/*" Component={CurrencyPage} />
            <Route path="/provider-type/*" Component={ProviderTypePage} />
            <Route path="/conditions/*" Component={ConditionsPages} />
            <Route path="/family/*" Component={FamillyPage} />
            <Route index Component={BankPage} />
        </Route>
    </Routes>
  )
}

export default SettingPage
