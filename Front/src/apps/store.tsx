import { usersReducer } from "@modules/settings-managements/users/core/reducers/user.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer, accessTokenReducer } from "@modules/auth/core/reducers";
import { qualitiesReducer } from "@modules/settings-managements/quality/core/reducers/quality.reducer";
import { banksReducer } from "@modules/settings-managements/banks/core/reducers/bank.reducer";
import { articleReducer } from "@modules/stocks-managements/articles/core/reducers/article.reducer";
import { roleReducer } from "@/modules/settings-managements/roles/core/reducers/role.reducer";

import { conditionsReducer } from "@/modules/settings-managements/conditions/core/reducers/condition.reducer";
import { emplacementReducer } from "@/modules/settings-managements/emplacements/core/reducers/emplacement.reducer";
import { WarehousesReducer } from "@/modules/settings-managements/warehouses/core/reducers/warehouse.reducer";
import { catalogReducer } from "@/modules/settings-managements/catalogues/core/reducers/catalog.reducer";
import { famillyReducer } from "@/modules/settings-managements/familly-sub-famillies/core/reducers/familly.reducer";
import { countryReducer } from "@/shared/common/redux/countries/core/reducer/country.reducer";
import { articleFormReducer } from "@/modules/stocks-managements/articles/core/reducers/acticleForm.reducer";
import { unitReducer } from "@/modules/settings-managements/units/core/reducers/unit.reducer";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    accessTokenState: accessTokenReducer,
    usersData: usersReducer,
    qualitiesData: qualitiesReducer,
    banksData: banksReducer,
    articleData: articleReducer,
    roleData: roleReducer,
    conditionsData : conditionsReducer,
    emplacementsData: emplacementReducer,
    warehouseData:WarehousesReducer,
    catalogData: catalogReducer,
    famillyData: famillyReducer,
    countryData: countryReducer,
    articleDataForm: articleFormReducer,
    unitData: unitReducer 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
