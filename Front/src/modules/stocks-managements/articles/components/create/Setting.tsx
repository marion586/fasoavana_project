import React from "react";
import { Checkbox, ConfigProvider } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDataBody, useDataBodySetting } from "../../lib";
import { store } from "@/apps/store";
import { setArticleForm } from "../../core/reducers/acticleForm.reducer";

export const Setting = () => {
  const settingData = useDataBodySetting()
  const storeArticleForm = useDataBody();
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    store.dispatch(setArticleForm({ ...storeArticleForm, parametre: {...settingData,mettreEnSommeil: e?.target?.checked} }))
  };

  const onChangeDate = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setArticleForm({ ...storeArticleForm, parametre: {...settingData,datePremiereEntree: e?.target?.value} }))
  }

  const onChangeNbStockMonth = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setArticleForm({ ...storeArticleForm, parametre: {...settingData,nbMoisStock: e?.target?.value ? Number(e?.target?.value) : 0} }))
  }
  return (
    <>
      <div className="pt-4 pb-10">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#7AE7FF",
            },
          }}
        >
          <Checkbox  onChange={onChange}><span className="label-gray">Mettre en sommeil</span></Checkbox>
        </ConfigProvider>
      </div>
      <div className="flex items-center w-full gap-3">
          <div className="basis-[50%]">
            <div className="w-full">
              <label htmlFor="libelle" className="ml-1">
                <span className="label-gray">date première entrée</span>
              </label>
              <input
                type="date"
                id="libelle"
                name="libelle"
                onChange={onChangeDate}
                className="lv-input-custom mt-2"
                placeholder={""}
              />
            </div>
          </div>
          <div className="basis-[50%]">
            <div className="w-full">
              <label htmlFor="nbMoisStock" className="ml-1">
                <span className="label-gray">Nombre mois en stock </span>
              </label>
              <input
                type="number"
                id="nbMoisStock"
                name="nbMoisStock"
                onChange={onChangeNbStockMonth}
                min={1}
                defaultValue={1}
                className="lv-input-custom mt-2"
                placeholder={""}
              />
            </div>
          </div>
        </div>
    </>
  );
};
