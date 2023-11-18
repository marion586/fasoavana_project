/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedMessage } from "react-intl";
import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { postLocation, putLocation } from "../core/requests/_post_request";
import Loading from "@/shared/components/Loading";
import {toast} from 'react-toastify'
import { getLocation } from "../core/requests/_get_request";
import { getAllWarehouses } from "../../warehouses/core/requests/get_requests";

const initialValues = {
    "warehouse": "",
    "zone": "",
    "aisle": 0,
    "rack": "",
    "floor": 0 
}
export const EmplacementForm = () => {
  const resource = "/warehouses/"
  const [loading,setLoading] = useState<boolean>(false)
  const {locationId} =useParams<{locationId: string}>()
  const initialOption = {
    value: "",
    label: "-- Sélectionner --",
  };
  const [famillyParent, setFamillyParent] = useState<any>(initialOption);
  const [warehouseOptions,setWarehouseOptions] = useState<any[]>([])
  const notifyError = (message:string) => toast.error(message)
  const notifySucces = (message:string) => toast.success(message)
  const navigate = useNavigate()
  const formik = useFormik<any>({
    initialValues: initialValues,
    onSubmit: async (values,{setSubmitting,resetForm}) => {
      setSubmitting(true)
      if(!locationId) {
        try {
          const response =await postLocation(values)
          console.log("res",response?.response?.response?.status);
          
          if(response?.response?.status?.toString()?.includes("4") || response?.response?.status?.toString()?.includes("5")){
            notifyError(response?.response?.data?.detail || "Erreur du server")
            return
          }
          if(response?.data?.id) {
               notifySucces("Emplacement ajouter avec sucées")
               setFamillyParent(initialOption)
               resetForm()
               navigate(-1)
          }
        } catch (error: any) {
            notifyError(error?.message || "Erreur du server")
        }
      }
      else {
        try {
          const response =await putLocation({...values,locationCode:code},locationId || "")
          console.log("res",response?.response?.response?.status);
          
          if(response?.response?.status?.toString()?.includes("4") || response?.response?.status?.toString()?.includes("5")){
            notifyError(response?.response?.data?.detail || "Erreur du server")
            return
          }
          if(response?.data?.id) {
               notifySucces("L'emplacement a été modifier avec sucées")
          }
        } catch (error: any) {
            notifyError(error?.message || "Erreur du server")
        }
      }
      setSubmitting(false)
    }
  })
  const onChangeFamillyParent = (data: any) => {
    if (!data) {
      setFamillyParent(initialOption);
      formik.setFieldValue( "warehouse", {"id": ""})
      return
    }
    setFamillyParent(data);
     formik.setFieldValue( "warehouse",  resource+data.value)
  };

  const code = useMemo(() => {
     if(formik.values?.zone && formik.values?.rack && formik.values?.aisle && formik.values?.floor ) {
      return `${formik.values?.zone}${formik.values?.rack}${formik.values?.aisle}${formik.values?.floor}`.toUpperCase()
     }
     return ''
  },[formik.values])
  useEffect(() => {
     const loadLocation = async() => {
      setLoading(true)
      if(locationId) {
        const respone = await getLocation(locationId || "")
        console.log(respone);
        if(resource && respone.status.toString().includes("2") && respone?.data) {
          const warehouse =  {
            "warehouse":  resource+respone?.data?.warehouse?.id || null,
            "zone": respone?.data?.zone || null,
            "aisle": respone?.data?.aisle || null,
            "rack": respone?.data?.rack || null,
            "floor": respone?.data?.floor || null 
          }
          formik.setValues(warehouse)
          setFamillyParent(respone?.data?.warehouse)
        }
      }
      setLoading(false)
     }
     loadLocation()
  },[locationId])

  useEffect(() => {
    const loadWarehouse = async() =>{
     const response = await getAllWarehouses({itemsPerPage:1000000,page:1,keyword: "",label:""})
     if(response?.data?.data) {
       const warehousemap = response?.data?.data.map((warehouse) => ({...warehouse,value:warehouse.id}))
       console.log("warehousemap",warehousemap);
       setWarehouseOptions(warehousemap
        )
     }
    }
    loadWarehouse()
  }, [locationId])
  console.log("form", formik.values);
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="font-bold text-xl mb-4">
        {
          locationId ? <FormattedMessage id="SETTING.EDIT_EMPLACEMENTS" defaultMessage= "Emplacements - Modification" />:
          <FormattedMessage id="MANAGEMENT_STOCK.NEW_EMPLACEMENTS" defaultMessage="Emplacements - Nouveau"/>
        }
      </h2>
      {/**form */}
      <div className="mb-3">
        <div className="mb-[50px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="libelle" className="label uppercase">
              entrepôt
              </label>
            </div>
            <Select
              options={warehouseOptions}
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
              <label htmlFor="zone" className="label uppercase">
                 zone
              </label>
            </div>
            <input
              type="text"
              id="zone"
              name="zone"
              onChange={(e) => {
                if(e.target.value.length > 1) return
                formik.setFieldValue("zone", e.target.value)
              }}
              value={formik.values?.zone || ""}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="aisle" className="label uppercase">
                allée
              </label>
            </div>
            <input
              type="number"
              id="aisle"
              name="aisle"
              onChange={(e) => {
                if(e.target.value.length > 1) return
                formik.setFieldValue("aisle", Number(e.target.value))
              }}
              value={formik.values?.aisle || ""}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
        </div>
        <div className="mb-[50px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="rack" className="label uppercase">
                 rack
              </label>
            </div>
            <input
              type="text"
              id="rack"
              name="rack"
              onChange={(e) => {
                if(e.target.value.length > 1) return
                formik.setFieldValue("rack", e.target.value)
              }}
              value={formik.values?.rack || ""}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="floor" className="label uppercase">
                etage
              </label>
            </div>
            <input
              type="number"
              id="floor"
              name="floor"
              onChange={(e) => {
                if(e.target.value.length > 1) return
                formik.setFieldValue("floor", Number(e.target.value))
              }}
              value={formik.values?.floor || ""}
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="code" className="label uppercase">
                 Code emplacement
              </label>
            </div>
            <input
              type="text"
              id="code"
              name="code"
              className="lv-input-custom"
              disabled
              value={code}
              placeholder={""}
            />
          </div>
        </div>
      </div>
      {/**button action store */}
      <div>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
          >
            <FormattedMessage id="CANCEL" />
          </button>
          <button
            type="submit"
            disabled={!code}
            className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            <FormattedMessage id="SAVE" />
          </button>
        </div>
      </div>
      <Loading loading={formik.isSubmitting ||loading} />
    </form>
  );
};
