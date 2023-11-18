/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDataCatalogueOption } from "@/modules/settings-managements/catalogues/lib";
import {useDataFamillyOption } from "@/modules/settings-managements/familly-sub-famillies/lib";
import { useDataCountryOption } from "@/shared/common/redux/countries/lib";
import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useDataBody, useDataBodyDescriptor } from "../../lib";
import { useFormik } from "formik";
import { store } from "@/apps/store";
import { setArticleForm } from "../../core/reducers/acticleForm.reducer";
export const Descriptor = () => {
  const initialOption = {
    value: "",
    label: "-- Sélectionner --",
  };

  const [familly, setFamilly] = useState<any>(initialOption);
  const [subFamilly, setSubFamilly] = useState<any>(initialOption);
  const [catalog, setCatalog] = useState<any>(initialOption);
  const [country, setCountry] = useState<any>(initialOption);
  const countryOptions = useDataCountryOption()
  const familliesOptions = useDataFamillyOption()
  const catalogOptions =useDataCatalogueOption()
  const descriptor =useDataBodyDescriptor()
  const formik = useFormik<any>({
    initialValues: descriptor,
    onSubmit: () => {
      /** */
    },
  });
  const storeArticleForm = useDataBody();
  useEffect(() => {
    store.dispatch(
      setArticleForm({ ...storeArticleForm, descriptif: formik.values })
    );
  }, [formik.values]);
  /*const subFamillyOptions: any[] = [
    initialOption,
    { label: "sous Famille 1", value: "SF1" },
    { label: "sous Famille 2", value: "SF2" },
    { label: "sous Famille 3", value: "SF3" },
  ];*/
  /*
  const catalogOptions: any[] = [
    initialOption,
    { label: "Catalogue 1", value: "C1" },
    { label: "Catalogue 2", value: "C2" },
    { label: "Catalogue 3", value: "C3" },
  ];*/

 /* const countryOptions: any[] = [
    initialOption,
    { label: "Madagascar", value: "MAD" },
    { label: "France", value: "FR" },
    { label: "Brésil", value: "BRA" },
  ];*/

  const onChangeFamilly = (data: any) => {
    if (!data) {
      setFamilly(initialOption);
      formik.setFieldValue("family",null)
      return
    }
    formik.setFieldValue("family",data?.value)
    setFamilly(data);
  };
  
  const onChangeSubFamilly = (data: any) => {
    if (!data) {
      setSubFamilly(initialOption);
      formik.setFieldValue("subFamily",null)
    }
    formik.setFieldValue("subFamily",data?.value)
    setSubFamilly(data);
  };

  const onChangeCatalog = (data: any) => {
    if (!data) {
      setCatalog(initialOption);
      formik.setFieldValue("catalog",null)
      return
    }
    formik.setFieldValue("catalog",data?.value)
    setCatalog(data);
  };
  const onChangeCountry = (data: any) => {
    if (!data) {
      setCountry(initialOption);
      formik.setFieldValue("paysOrigine",null)
    }
    formik.setFieldValue("paysOrigine",data?.value)
    setCountry(data);
  };
  return (
    <>
      <div className="px-6">
        <div className="mt-[5px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="famille" className="text-[#677788] font-light uppercase">
                 Catalogue
              </label>
            </div>
            <Select
              id="famille"
              options={catalogOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={catalog}
              onChange={onChangeCatalog}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="famille" className="text-[#677788] font-light uppercase">
              Famille
              </label>
            </div>
            <Select
              id="famille"
              options={familliesOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={familly}
              onChange={onChangeFamilly}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="famille" className="text-[#677788] font-light uppercase">
              SOUS FAMILLE
              </label>
            </div>
            <Select
              id="famille"
              options={familliesOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={subFamilly}
              onChange={onChangeSubFamilly}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
        </div>
        <h2 className="mt-4 font-bold text-[16px]">Descriptif complémentaire</h2>
        <div className="flex gap-5 items-center mt-2">
          <div className="basis-[10%]">
            <label htmlFor="designation" className="text-[#677788] font-light uppercase ">
              langue 1
            </label>
          </div>
          <div className="basis-[100%]">
              <input  id="designation" {...formik.getFieldProps("langue1")} className="lv-input-custom  text-[#677788]" />
          </div>
        </div>
        <div className="flex gap-5 items-center mt-2">
          <div className="basis-[10%]">
            <label htmlFor="designation"  className="text-[#677788] font-light uppercase ">
              langue 2
            </label>
          </div>
          <div className="basis-[100%]">
              <input  id="designation"  {...formik.getFieldProps("langue2")}   className="lv-input-custom  text-[#677788]" />
          </div>
        </div>
        <div className="mt-5 flex gap-4">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="hsCode" className="text-[#677788] font-light uppercase ">
                 HS-code{/** */}
              </label>
            </div>
            <input  id="hsCode"  {...formik.getFieldProps("hsCode")} className="lv-input-custom  text-[#677788]" />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="famille" className="text-[#677788] font-light uppercase ">
              pays d’origine
              </label>
            </div>
            <Select
              id="famille"
              options={countryOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={country}
              onChange={onChangeCountry}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
        </div>
      </div>
    </>
  );
};
