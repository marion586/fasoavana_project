/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { postNewWarehouse } from "../../core/requests/post_requests";
import { getWarehouseById } from "../../core/requests/get_requests";
import Loading from "@/shared/components/Loading";
import { patchWarehouse } from "../../core/requests/patch_requests";
const WarehouseForm = () => {
  const { idWarehouse } = useParams()

  const navigate = useNavigate()
  const [loading , setLoading] = useState((false))
  const [initialDatafield] = useState({label: ""})


  const fetchWarehouseByID = async (id :string) => {
    try {
     setLoading(true)
      const response: any = await getWarehouseById(id)
      if (response?.status === 200) {

        formik.setFieldValue('label',response?.data?.label)
      }
     
     if (response?.response?.status === 404) {
      toast.error(response?.response?.data.detail)
     }
   } catch (error: any) {
     toast.error(error.message)
    } finally {
      setLoading(false)
   }
  }  

  useEffect(() => {
    if (idWarehouse) {
      fetchWarehouseByID(idWarehouse)
    }
  },[])
    const formik = useFormik({
    initialValues:initialDatafield,
    onSubmit: async (values) => {
      if (!idWarehouse) {
        try {
          setLoading(true) 
          const response:any = await postNewWarehouse(values)
        if (response.status === 201)
          {
          toast.success("Ajoutée avec succés")
          navigate(-1)
        }
        if (response?.response?.status === 422)
          {
          toast.error(response?.response?.data.detail)
        }
          setLoading(false) 
        } catch (error: any) {
          toast.error(error?.message)
        }
      }
  
      if (idWarehouse) {
        setLoading(true)
        const response:any = await patchWarehouse(values , idWarehouse)
  
        if (response.status === 200)
          {
          toast.success('Modifiée avec avec success');
          navigate(-1)
          
        }
        else  {
              toast.error(response?.response?.data.detail)
         }
          setLoading(false)
         
      }
    },
  });

  if (loading) return <Loading loading={loading} />
  
  return (
    <form onSubmit={formik.handleSubmit}>
       <div className="bg-white py-3 px-4 w-[99%]">
      <div>
        <h1 className="text-[20px] font-[500] text-black">   Conditionnements - {idWarehouse ? <>Modifier</> : <>Nouveau</>} </h1>
        <div className="basis-[32%] mt-[100px]">
            <div className="mb-[10px]">
              <label htmlFor="abbreviation" className="label uppercase">
                Abrégé
              </label>
            </div>
            <input
              type="text"
              id="label"
              {...formik.getFieldProps("label")}
              name="label"
              className="lv-input-custom w-[300px]"
              placeholder={""}
            />
          </div>
      </div>
        <div className="flex gap-4 justify-end mt-10">
        <button
          onClick={()=>navigate(-1)}
          className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
          <FormattedMessage id="CANCEL" />
        </button>
        <button
          type="submit"
          className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          disabled= {loading}
        >
          {idWarehouse ?<FormattedMessage id="EDIT" /> :<FormattedMessage id="SAVE" /> }
          
        </button>
      </div>
    </div>
   </form>
  )
}

export default WarehouseForm