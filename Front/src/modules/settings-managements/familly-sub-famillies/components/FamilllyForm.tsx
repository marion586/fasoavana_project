/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedMessage } from "react-intl";
import {useState,useEffect, useMemo} from 'react'
import Select from 'react-select'
import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { fetchFamillies } from "../core/actions";
import { useRequest, useResponseData } from "../lib";
import { useFormik } from "formik";
import { FamillyForm } from "../core/models/familly.model";
import { postFamilly, putFamilly } from "../core/requests/post_request";
import Loading from "@/shared/components/Loading";
import { toast } from "react-toastify";
import { getFamilly } from "../core/requests/get_requests";
const initState: FamillyForm = {
  label:"",
  parent:""
}

const initialOption = {
  value: "",
  label: "-- Sélectionner --",
};

export const FamilyForm = () => {
    const {famillyId} = useParams<{famillyId: string}>()
    const navigate = useNavigate()
    const [famillyParent, setFamillyParent] = useState<{value: string ,label: string}>(initialOption);
    const [loading,setLoading] = useState<boolean>(false);
    const request = useRequest()  
    const responseData = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const toastError =(mess:string) => toast.error(mess) 
    const toastSuccess =(mess:string) => toast.success(mess)  
    const formik = useFormik<any>({
       initialValues: initState,
       onSubmit: async(values,{setSubmitting} ) => {
           if(famillyId) {
            try {
              setSubmitting(true)
              const response = await putFamilly(values,famillyId || "")
              if(response?.status?.toString()?.length > 0 && response?.status?.toString()?.charAt(0) === "2") {
                toastSuccess("Modification du familly avec du succés")
              } else {
                 toastError(response?.response?.data?.violations?.message || "Echec de la modification du familly")
              }
              console.log("response",response);
              setSubmitting(false)
            } catch (error:any) {
              toastError(new Error(error).message || "Echec de la modification  du familly")
            }
              
           }
           else { 
            try {
              setSubmitting(true)
              const response = await postFamilly(values)
              if(response?.status?.toString()?.length > 0 && response?.status?.toString()?.charAt(0) === "2") {
                toastSuccess("Ajout du familly avec du succés")
                navigate(-1)
              } else {
                 toastError(response?.response?.data?.violations?.message || "Echec de l'ajout du familly")
              }
              console.log("response",response);
              setSubmitting(false)
            } catch (error:any) {
              toastError(new Error(error).message || "Echec de l'ajout du familly")
            }
          }
       },
    })
    const onChangeFamillyParent = (data: any) => {
        if (!data) {
          setFamillyParent(initialOption);
          formik.setFieldValue("parent","")
          return
        }
        setFamillyParent(data);
        formik.setFieldValue("parent",data?.value)

      };
    
      useEffect(() => {
       dispatch(fetchFamillies({...request, itemsPerPage:200}))
      }, [dispatch,request])

      const famillyOption = useMemo(() => {
         return  responseData.map(familly => ({...familly,value: `/families/${familly.id}`}))
      }, [responseData])
      useEffect(() => {
       const loadFamilly =async () => {
        setLoading(true)
        const response = await getFamilly(famillyId || "")
        formik.setValues({label: response?.data?.label,parent:`/families/${ response?.data?.parent?.id}`})
        setFamillyParent({value: `/families/${ response?.data?.parent?.id}` || "", label:  response?.data?.parent?.label || "" })
        setLoading(false)
       }
       loadFamilly()
       }, [famillyId])
      
      
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="font-bold text-xl mb-2">
       {
        famillyId ? <FormattedMessage id="MANAGEMENT_STOCK.EDIT_FAMILLY" defaultMessage="Familles / Sous Familles - Modification" />
        : <FormattedMessage id="MANAGEMENT_STOCK.NEW_FAMILLY" defaultMessage="Familles / Sous Familles - Nouveau" />
       } 
      </h2>
      {/**form */}
      <div className="mb-3">
        <div className="mb-[20px]">
              <div className="mb-[10px]">
                <label htmlFor="label" className="label uppercase">intitulé</label>
              </div>
              <input
                type="text"
                id="label"
                {...formik.getFieldProps("label")}
                className="lv-input-custom"
                placeholder={""}
              />
        </div>
        <div className="mb-[50px]">
              <div className="mb-[10px]">
                <label htmlFor="parent" className="label uppercase">Famille parente</label>
              </div>
              <Select
                options={famillyOption}
                styles={selectCustomStyle}
                className="w-full max-w-[30%]"
                isClearable={true}
                value={famillyParent}
                onChange={onChangeFamillyParent}
                placeholder="-- Selectionner --"
                isSearchable
              />
        </div>
      </div>
      {/**button action store */}
      <div>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
          >
            <FormattedMessage id="CANCEL" />
          </button>
          <button
            type="submit"
            className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            <FormattedMessage id="SAVE" />
          </button>
        </div>
      </div>
      <Loading loading={formik.isSubmitting || loading} />
    </form>
  );
};
