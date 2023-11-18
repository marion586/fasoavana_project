/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDataConditionOption } from "@/modules/settings-managements/conditions/lib";
import { useDataLocationOption } from "@/modules/settings-managements/emplacements/lib";
import { useDataFamillyOption } from "@/modules/settings-managements/familly-sub-famillies/lib";
import { useDataWarehouseOption } from "@/modules/settings-managements/warehouses/lib";
import {
  multiSelectCustomStyle,
  selectCustomStyle,
} from "@/shared/libs/FormHelpers";
import { QRCodeGenerator } from "@widgets/QRCodeGenerator";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Select from "react-select";
import {
  useDataBody,
  useDataBodyIndetificator,
  useResponseDataStockTracking,
  useResponseDataTypeSalePrice,
} from "../../lib";
import { useFormik } from "formik";
import { store } from "@/apps/store";
import { setArticleForm } from "../../core/reducers/acticleForm.reducer";
import { useDataUnitsOption } from "@/modules/settings-managements/units/lib";
export const Identification = () => {
  const initialOption = {
    value: "",
    label: "-- Sélectionner une famille --",
  };
  const [famillyParent, setFamillyParent] = useState<any>(initialOption);
  const [condition, setCondition] = useState<any>(initialOption);
  const [warehouse, setWarehouse] = useState<any>(initialOption);
  const [location, setLocation] = useState<any | any[]>();
  const [stockTracking, setStockTracking] = useState<any>();
  const [unit, setUnit] = useState<any>();
  const [typeSalePrice, setTypeSalePrice] = useState<any | any[]>();
  const locationOptions = useDataLocationOption();
  const famillyParentOptions = useDataFamillyOption();
  const conditionOptions = useDataConditionOption();
  const warehouseOptions = useDataWarehouseOption();
  const stockTrackingOption = useResponseDataStockTracking();
  const typeSalePriceOption = useResponseDataTypeSalePrice();
  const unitOptions = useDataUnitsOption()
  const { idArticle } = useParams<{ idArticle: string }>();

  const onChangeFamillyParent = (data: any) => {
    if (!data || !data?.value) {
      setFamillyParent(initialOption);
      formik.setFieldValue("family",null)
      return;
    }
    formik.setFieldValue("family",data?.value ? data?.value: null)
    setFamillyParent(data);
  };

  const onChangeCondition = (data: any) => {
    if (!data) {
      setCondition(initialOption);
      formik.setFieldValue("conditioning", null)
      return;
    }
    formik.setFieldValue("conditioning",data?.value ? data?.value: null)
    setCondition(data);
  };

  const onChangeStockTracking = (data: any) => {
    if (!data) {
      setStockTracking(initialOption);
      formik.setFieldValue("suiviStock",null)
      return;
    }
    formik.setFieldValue("suiviStock",data?.value ? data?.value: null)
    setStockTracking(data);
  };

  const onChangeWarehouse = (data: any) => {
    if (!data) {
      setWarehouse(initialOption);
      formik.setFieldValue("warehouse",null)
      return;
    }
    formik.setFieldValue("warehouse",data?.value ? data?.value: null)
    setWarehouse(data);
  };

  const onChangeTypeSalePrice = (data: any) => {
    if (!data) {
      setTypeSalePrice(initialOption);
      formik.setFieldValue("prixVenteType",null)
      return;
    }
    formik.setFieldValue("prixVenteType",data?.value ? data?.value: null)
    setTypeSalePrice(data);
  };

  const onChangeUnit = (data: any) => {
    if (!data) {
      setUnit(initialOption);
      formik.setFieldValue("uniteVente",null)
      return;
    }
    formik.setFieldValue("uniteVente",data?.value ? data?.value: null)
    setTypeSalePrice(data);
  };

  const onChangeLocation = (data: any) => {
    console.log("data", data);
    if (!data) {
      setLocation(initialOption);
      return;
    }
    let _location: any = []
    if(Array.isArray(data)) {
      _location = data.map((data) => data?.value)
    }
    formik.setFieldValue("locations",_location)
    setLocation(data);
  };

  const identificator = useDataBodyIndetificator();
  console.log("identificator", identificator);

  // Supprimer la propriété "ville" de l'objet
  //delete monObjet.ville;

  /*  const ObjetToString = () => {
    const objectModule: any = {
      nom: "",
      age: 30,
      ville: "New York",
    };
      const keys= Object.values(objectModule).map((value:any,i) => {
          if(!value){
             const name =  Object.keys(objectModule)[i]
             delete objectModule[name]
          }
      })
      console.log(objectModule);
      
      console.log("keys",keys);
      const result = keys.filter((key) => (key))
      return result.toString()
  }*/

  const formik = useFormik<any>({
    initialValues: identificator,
    onSubmit: () => {
      /** */
    },
  });
  const storeArticleForm = useDataBody();
  useEffect(() => {
    store.dispatch(
      setArticleForm({ ...storeArticleForm, identification: formik.values })
    );
  }, [formik.values]);
  return (
    <>
      <div className="rounded-[5px] border-[0.5px] border-[#E7EAF3] py-3 px-4">
        <h2 className="text-[20px] font-[500] text-black mb-5">
          Identification
        </h2>
        {/**qrcode */}
        <div className="flex justify-between">
          <div className="w-[30%]">
            <label
              htmlFor="reference"
              className="label-required text-[#677788] font-light uppercase "
            >
              référence
            </label>
            <input
              id="reference"
              className="lv-input-custom w-full mt-[6px] text-[#677788]"
              {...formik.getFieldProps("reference")}
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Qr code</span>
            <QRCodeGenerator
              isGeneratePdf={idArticle ? true : false}
              value={idArticle ?? ""}
            />
          </div>
        </div>
        {/**désignation */}
        <div className="w-full">
          <label
            htmlFor="designation"
            className="text-[#677788] font-light uppercase "
          >
            désignation
          </label>
          <input
            id="designation"
            className="lv-input-custom w-full mt-[6px] text-[#677788]"
            {...formik.getFieldProps("designation")}
          />
        </div>
        {/**Famille */}
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label
                htmlFor="famille"
                className="text-[#677788] font-light uppercase "
              >
                Famille
              </label>
            </div>
            <Select
              id="famille"
              options={famillyParentOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={famillyParent}
              onChange={onChangeFamillyParent}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label
                htmlFor="nomenclature"
                className="text-[#677788] font-light uppercase "
              >
                Nomenclature
              </label>
            </div>
            <input
              type="text"
              id="nomenclature"
              {...formik.getFieldProps("nomenclature")}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label
                htmlFor="suivi_stock"
                className="text-[#677788] font-light uppercase "
              >
                Suivi de stock
              </label>
            </div>
            <Select
              id="famille"
              options={stockTrackingOption}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={stockTracking}
              onChange={onChangeStockTracking}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
        </div>
        {/**conditionement */}
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="famille" className="label-gray">
                Conditionnements
              </label>
            </div>
            <Select
              id="famille"
              options={conditionOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={condition}
              onChange={onChangeCondition}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="famille" className="label-gray">
                entrepôt
              </label>
            </div>
            <Select
              id="famille"
              options={warehouseOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={warehouse}
              onChange={onChangeWarehouse}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="suivi_stock" className="label-gray">
                Code emplacement
              </label>
            </div>
            <Select
              id="famille"
              options={locationOptions}
              styles={multiSelectCustomStyle}
              classNames={{
                control: (/*state*/) =>
                  location?.length > 2 ? "h-auto" : "h-[45px]",
              }}
              className="w-full"
              isClearable={true}
              value={location}
              onChange={onChangeLocation}
              placeholder="-- Selectionner --"
              isSearchable
              isMulti
            />
          </div>
        </div>
        <Divider />
        {/**Prix d'achat */}
        <h2 className="text-[20px] font-[500] text-black mb-5">Tarif</h2>
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="prixAchat" className="label-gray">
                Prix d’achat
              </label>
            </div>
            <input
              type="number"
              id="prixAchat"
              {...formik.getFieldProps("prixAchat")}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="dernierPrixAchat" className="label-gray">
                Dernier prix d’achat
              </label>
            </div>
            <input
              type="number"
              min={0}
              id="dernierPrixAchat"
              {...formik.getFieldProps("dernierPrixAchat")}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="coefficient" className="label-gray">
                coefficient
              </label>
            </div>
            <input
              type="number"
              id="coefficient"
              min={0}
              {...formik.getFieldProps("coefficient")}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
        </div>
        {/**cout standard */}
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="coutStandard" className="label-gray">
                Coûts standard
              </label>
            </div>
            <input
              type="number"
              min={0}
              id="coutStandard"
              {...formik.getFieldProps("coutStandard")}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="prixVente" className="label-gray">
                Prix de vente
              </label>
            </div>
            <div className="flex gap-4">
              <input
                type="number"
                min={0}
                id="prixVente"
                {...formik.getFieldProps("prixVente")}
                className="lv-input-custom basis-[60%]"
                placeholder={""}
              />
              <Select
              id="famille"
                options={typeSalePriceOption}
                styles={selectCustomStyle}
                className="w-full basis-[40%]"
                isClearable={true}
                value={typeSalePrice}
                onChange={onChangeTypeSalePrice}
                placeholder="Selection"
                isSearchable
             />
            </div>
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="suivi_stock" className="label-gray">
                unité de vente
              </label>
            </div>
            <Select
              id="famille"
                options={unitOptions}
                styles={selectCustomStyle}
                className="w-full"
                isClearable={true}
                value={unit}
                onChange={onChangeUnit}
                placeholder="Selection"
                isSearchable
             />
          </div>
        </div>
      </div>
      {/** Categorie tarifiaire*/}
      <div className="mt-5">
        <div className="flex gap-3">
          <div className="basis-[20%]">
            <div className="flex justify-end gap-4 items-center">
              <span className="font-bold text-[16px] text-center">
                Catégories tarifaires
              </span>
              <BsFillCaretDownFill />
            </div>
          </div>
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="font-sans text-[16px] text-center">
              Coefficient
            </span>
          </div>
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="font-sans text-[16px]">Prix de vente</span>
          </div>
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="font-sans text-[16px]">Remise</span>
          </div>
          <div className="basis-[20%] text-center">
            <span className="font-sans text-[16px] text-white">{`                 `}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="text-[16px]">Groupe</span>
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <button
              type="button"
              className="py-2 px-4 h-[46px] w-[180px] lv-btn-secondary rounded-[3px] shadow-md"
            >
              Modifier
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="text-[16px]">Distributeur</span>
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <button
              type="button"
              className="py-2 px-4 h-[46px] w-[180px] lv-btn-secondary rounded-[3px] shadow-md"
            >
              Modifier
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="text-[16px]">Revendeur</span>
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <button
              type="button"
              className="py-2 px-4 h-[46px] w-[180px] lv-btn-secondary rounded-[3px] shadow-md"
            >
              Modifier
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="basis-[20%] text-center text-[#677788] font-normal">
            <span className="text-[16px]">Installateur </span>
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input className="lv-input-custom w-full  text-[#677788]" />
          </div>
          <div className="basis-[20%]">
            <input
              type="button"
              className="lv-input-custom w-full  text-[#677788]"
            />
          </div>
          <div className="basis-[20%]">
            <button
              type="button"
              className="py-2 px-4 h-[46px] w-[180px] lv-btn-secondary rounded-[3px] shadow-md"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
      {/** end Categorie tarifiaire*/}
    </>
  );
};
