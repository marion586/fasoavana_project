/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectCustomStyle } from "@/shared/libs/FormHelpers";

// import { QRCodeGenerator } from "@widgets/QRCodeGenerator";
// import { Divider } from "antd";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
// import { BsFillCaretDownFill } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import {  useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { AddBankModel } from "../../core/models/bank.model";
import { postNewBankIdentity } from "../../core/requests/post_requests";
import { getAllCountries } from "../../core/requests/get_requests";

import Loading from "@/shared/components/Loading";
import { toast } from "react-toastify";

import { parseDataSelect } from "../../lib/parseDataSelect";
import { patchBankIdentity } from "../../core/requests/patch_requests";
type IdProps = {
  handleAddContact: (id: number) => void,
  editData?:any
}
export const IdentificationForm = ({handleAddContact ,editData}:IdProps) => {
  const { idBank } = useParams<{ idBank: string | undefined }>()
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()

  const initialBankIdentity: AddBankModel = {
    abbreviation: "",
    entitled: "",
    interlocutor:"",
    address:"",
    complement: "",
    city: "",
    region:"",
    postalCode: "",
    phone: "",
    email:"",
    website:"",
    country: ""
  }
  const [initialDatafield ] = useState<any>(editData? editData :initialBankIdentity)
   const initialOption = {
    value: "",
    label: "-- Sélectionner --",
  };
  const [countries , setCountries] =useState< any[]>([initialOption]);
 
  const [famillyParent, setFamillyParent] = useState<{
    value: string;
    label: string;
  }>(initialOption);




   
  
  const fetchAllCountries = async () => {
   try {
    setLoading(true)
     const response = await getAllCountries({ itemsPerPage: 256 })
     if (response?.status == 200)
      {
       const parsedData = parseDataSelect(response.data.data, "country")
       if (parsedData) {
           setCountries(parsedData)
       }
       else setCountries([initialOption])
      }   
   } catch (error) {
    console.log(error)
   }
   finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    
    fetchAllCountries()
   

  }, [])

  const onChangeFamillyParent = (data: any) => {
    console.log(data)
    if (!data) {
      setFamillyParent(initialOption);
    }
    setFamillyParent(data);
    formik.setFieldValue('country', data.value)
  };

 
  console.log('init',initialDatafield)

  const formik = useFormik({
    initialValues:initialDatafield,
    onSubmit: async (values) => {
      console.log(famillyParent)
      console.log(values);
      if (!idBank) {
        setLoading(true)
        const response:any = await postNewBankIdentity(values)
       
        if (response.status === 201)
          {
          toast.success('Ajoutée avec success', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          if (response?.data?.id) {
            handleAddContact(response?.data?.id)
          }
        }
        console.log(response)
         if (response?.response?.status === 403) {
            toast.error('Peut Etre une Erreur', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
         }
          setLoading(false)
         
      }
  
      if (idBank) {
        setLoading(true)
        const response:any = await patchBankIdentity(values , idBank)
       
        if (response.status === 200)
          {
          toast.success('Modifiée avec avec success', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          if (response?.data?.id) {
            handleAddContact(response?.data?.id)
          }
        }
        console.log(response)
         if (response?.response?.status === 403) {
            toast.error('Peut Etre une Erreur', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
         }
          setLoading(false)
         
      }
    },
  });
  if (loading) return <Loading loading={loading} />
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="py-3 px-4">
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="abbreviation" className="label uppercase">
                Abrégé
              </label>
            </div>
            <input
              type="text"
              id="abbreviation"
              {...formik.getFieldProps("abbreviation")}
              name="abbreviation"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="entitled" className="label uppercase">
                intitulé
              </label>
            </div>
            <input
              type="text"
              id="entitled"
              {...formik.getFieldProps("entitled")}
              name="entitled"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="interlocutor" className="label uppercase">
                Interlocuteur
              </label>
            </div>
            <input
              type="text"
              id="interlocutor"
              {...formik.getFieldProps("interlocutor")}
              name="interlocutor"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
        </div>

        <h2 className="mt-4 font-bold text-[16px]">Coordonnées</h2>
        <div className="flex gap-5 items-center mt-2">
          <div className="basis-[10%]">
            <label htmlFor="address" className="text-[#677788] font-light uppercase ">
            Adresse
            </label>
          </div>
          <div className="basis-[100%]">
              <input  id="address"    {...formik.getFieldProps("address")} name="address" className="lv-input-custom  text-[#677788]" />
          </div>
        </div>
        <div className="flex gap-5 items-center mt-2">
          <div className="basis-[10%]">
            <label htmlFor="complement" className="text-[#677788] font-light uppercase ">Complément</label>
          </div>
          <div className="basis-[100%]">
              <input  id="complement"  {...formik.getFieldProps("complement")}   name="complement" className="lv-input-custom  text-[#677788]" />
          </div>
        </div>
        {/**pays */}
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="country" className="label uppercase">
                pays
              </label>
            </div>
            <Select
              id="country"
              options={countries}
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
              <label htmlFor="city" className="label uppercase">
                 ville
              </label>
            </div>
            <input
              type="text"
              id="city"
              {...formik.getFieldProps("city")}
              name="city"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="region" className="label uppercase">
                 Region
              </label>
            </div>
            <input
              type="text"
              id="region"
              {...formik.getFieldProps("region")}
              name="region"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
        </div>
        {/**code postal */}
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="postalCode" className="label uppercase">
              code postal
              </label>
            </div>
            <input
              type="text"
              id="postalCode"
              {...formik.getFieldProps("postalCode")}
              name="postalCode"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]"></div>
          <div className="basis-[32%]"></div>
        </div>

        <h2 className="mt-4 font-bold text-[16px]">Télécommunication</h2>
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="phone" className="label uppercase">
                 Téléphone
              </label>
            </div>
            <input
              type="text"
              id="phone"
              {...formik.getFieldProps("phone")}
              name="phone"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="email" className="label uppercase">
                 email
              </label>
            </div>
            <input
              type="text"
              id="email"
              {...formik.getFieldProps("email")}
              name="email"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="website" className="label uppercase">
                 Site internet
              </label>
            </div>
            <input
              type="text"
              id="website"
              {...formik.getFieldProps("website")}
              name="website"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
        </div>
      </div>
      {/** end Categorie tarifiaire*/}
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
          {idBank ?<FormattedMessage id="EDIT" /> :<FormattedMessage id="SAVE" /> }
          
        </button>
      </div>
    </form>
  );
};
