/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedMessage } from "react-intl";
import {BsFileEarmarkText, BsFileRichtext, BsGear, BsPerson, BsPersonGear} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import {useState,useEffect} from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { postRoles, putRoles } from "../core/requests/_post_request";
import Loading from "@/shared/components/Loading";
import { toast } from 'react-toastify'
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { useRequest } from "../lib";
import { fetchRoles } from "../core/action";
import { getRole } from "../core/requests/_get_request";

const initState = {
  "name": "",
  "permissions": [],
  "supply": true,
  "description":""
}
export const RoleForm = () => {
  const {roleId} = useParams<{roleId: string}>()
  const navigate = useNavigate()
  const [loading,setLoading] = useState<boolean>(false)  
  const dispatch: AppDispatch = useAppDispatch();
  const request = useRequest();
  const [status,setStatus] = useState<"SUPPLY" | "CLIENT">("SUPPLY")
  const notify = (message:string) => toast.success(message);
  const notifyError = (message:string) => toast.error(message);
  const formik = useFormik<any>({
    initialValues: initState,
    onSubmit: async(values, {setSubmitting}) => {
       console.log(values);
       setSubmitting(true)
       if(!roleId) {
        const response =   await postRoles(values)
        console.log("respons",response);
        if(response?.data?.id) {
          notify("Ajout avec success")
        }
        else {
           notifyError("Ajout réfusé")
        }
        dispatch(fetchRoles(request));
        navigate("/setting/role")
       }
       else {
        const response =   await putRoles(values,roleId ?? values.id)
        console.log("respons",response);
        if(response?.data?.id) {
          notify("Modification avec success")
        }
        else {
           notifyError("Modification réfusé")
        }
        dispatch(fetchRoles(request));
       }
       setSubmitting(false)
    }
  })
  useEffect(() => {
    const loadRole =async () => {
      setLoading(true)
      const response =await getRole(roleId ?? '')
      console.log(response);
      if(response?.data?.id) {
        formik.setValues(response?.data ?? initState)
      }
      setLoading(false)
    }
    loadRole()
  }, [roleId])
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="font-bold text-xl mb-2">
        <FormattedMessage id="SETTING.NEW_ROLE" />
      </h2>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <input 
                id="supply" 
                type="radio" 
                name="type" 
                checked={status == "SUPPLY"}
                className="peer/draft"
                onClick={() => setStatus("SUPPLY")}
          />
          <label htmlFor="supply" className="uppercase">
            supply chain manager
          </label>
        </div>
        <div className="flex gap-1">
          <input
                id="client"
                name="type"
              //  checked={status == "CLIENT"}
                type="radio" 
                className=""
                disabled
              //  onClick={() => setStatus("CLIENT")}
           />
          <label htmlFor="client" className="uppercase">
            Client
          </label>
        </div>
      </div>
      {/**input */}
        <div className="flex justify-between items-center w-full gap-3">
          <div className="basis-[30%]">
            <div className="w-full">
              <label htmlFor="libelle" className="ml-1">
                <span className="label-required uppercase">Libellé</span>
              </label>
              <input
                type="text"
                id="name"
                {...formik.getFieldProps("name")}
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
          </div>
          <div className="basis-[100%]">
            <div className="w-full">
              <label htmlFor="description" className="ml-1">
                <span className="label-required uppercase">Description</span>
              </label>
              <input
                type="text"
                id="description"
                {...formik.getFieldProps("description")}
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
          </div>
        </div>
       { status == "SUPPLY" && (<div className="!mt-6">
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <BsGear className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="SETTING.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <BsPerson className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="PROVISIONING.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <BsFileRichtext className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="ALERT.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <IoIosNotificationsOutline className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="CREATE_STOCK.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <BsPersonGear className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="CREATE_STOCK.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <CgNotes className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="BILLING.LABEL" />
                </div>
            </div>
        </div>)}
        { status == "CLIENT" && (<div className="!mt-6">
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <BsFileEarmarkText className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="MY_NEED.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <TbReportSearch className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="CURRENT_NEED.LABEL" />
                </div>
            </div>
            <div className="flex gap-2 items-center !mt-3">
                <input  type="checkbox" className="h-[14px] w-[14px] border bg-gray-300 border-[#A6A6A6] rounded-md"/>
                <div className="flex items-center">
                    <HiOutlineDocumentCheck className="text-[15px] !mr-[8px]" />
                    <FormattedMessage id="TREATIES_NEED.LABEL" />
                </div>
            </div>
        </div>)}
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
