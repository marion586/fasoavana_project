/* eslint-disable react-hooks/exhaustive-deps */
import { FormattedMessage } from "react-intl";
import { CatalogForm } from "../core/models/catalogue.model";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { postCatalog, putCatalog } from "../core/requests/post_request";
import Loading from "@/shared/components/Loading";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getCatalog } from "../core/requests/get_requests";

export const CatalogueForm = () => {
  const {catalogId} = useParams<{catalogId: string }>()
  const navigate = useNavigate()
  const initState: CatalogForm = {
     label: "",
     id: undefined
  }
  const toastSuccess = (message:string) => toast.success(message)
  const toastError = (message:string) => toast.error(message)
  const formik = useFormik({
    initialValues: initState,
    onSubmit: async (values, {setSubmitting,resetForm}) => {
        setSubmitting(true)
        if(catalogId) {
          try {
            const response = await putCatalog(values,catalogId || '')
            if(response.status.toString().length > 0 && response.status.toString().charAt(0).includes("2")){
               toastSuccess("Catalogue modifie avec succéss")                   
            }
            else {
               //console.log("response",response?.response);
               toastError("Catalogue non modifie")
            }
           } catch (error) {
              console.log("error",error);
              toastError("Catalogue non modifie")
           }
        }
        else {
           try {
            const response = await postCatalog(values)
            if(response.status.toString().length > 0 && response.status.toString().charAt(0).includes("2")){
               toastSuccess("Catalogue ajouté avec succéss")                   
               resetForm()
               navigate(-1)
            }
            else {
               //console.log("response",response?.response);
               toastError("Catalogue non ajouté")
            }
           } catch (error) {
              console.log("error",error);
              toastError("Catalogue non ajouté")
           }
           
        }
        setSubmitting(false)
    }
  })
  const  [loading, setLoading]=useState(false)
  useEffect(() => {
    const loadCatalog = async() => {
     setLoading(true)
     const response = await getCatalog(catalogId || "")
     console.log('catal', response)
     formik.setValues(response.data)
     setLoading(false)
    }
    loadCatalog()
  }, [catalogId])
  
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="font-bold text-xl mb-2">
        <FormattedMessage id="SETTING.NEW_CATALOGUE" defaultMessage="Catalogues - Nouveau" />
      </h2>
      {/**form */}
      <div>
        <div className="flex w-full mt-3 gap-3">
          <div className="basis-[30%]">
            <div className="w-full">
              <label htmlFor="label" className="ml-1">
                <span className="label-required uppercase">Libellé</span>
              </label>
              <input
                type="text"
                id="label"
                {...formik.getFieldProps("label")}
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
          </div>
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
