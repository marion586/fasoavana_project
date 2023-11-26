/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getAllCivilities,
  getAllCountries,
} from "../../core/requests/get_requests";
import Loading from "@/shared/components/Loading";
import { parseDataSelect } from "../../lib/parseDataSelect";
import { toast } from "react-toastify";
import { postNewBankContact } from "../../core/requests/post_requests";
import { patchBankContact } from "../../core/requests/patch_requests";

type contactProps = {
  idBankForContact: number | null;
  initialFieldValue?: any;
};
export const ContactForm = ({
  idBankForContact,
  initialFieldValue,
}: contactProps) => {
  const navigate = useNavigate();

  const { idBank } = useParams<{ idBank: string | undefined }>();
  console.log(idBank);
  const initialOption = {
    value: "",
    label: "-- Sélectionner --",
  };
  const [country, setCoutry] = useState<{
    value: string;
    label: string;
  }>(initialOption);
  const [civility, setCivility] = useState<{
    value: string;
    label: string;
  }>(initialOption);

  const [countries, setCountries] = useState<any[]>([initialOption]);
  const [civilities, setCivilities] = useState<any[]>([initialOption]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAllCountries = async () => {
    try {
      const response = await getAllCountries({ itemsPerPage: 256 });
      if (response?.status == 200) {
        const parsedData = parseDataSelect(response.data.data, "country");
        if (parsedData) {
          setCountries(parsedData);
        } else setCountries([initialOption]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllCivilities = async () => {
    try {
      const response = await getAllCivilities();
      if (response?.status == 200) {
        const parsedData = parseDataSelect(response.data.data, "civility");
        if (parsedData) {
          console.log(parsedData);
          setCivilities(parsedData);
        } else setCivilities([initialOption]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchAllCivilities();
      fetchAllCountries();
    } catch (error) {
      toast.error("Il y a une erreur , verifier votre connexion", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const onChangeContries = (data: any) => {
    if (!data) {
      setCoutry(initialOption);
    }
    setCoutry(data);
    formik.setFieldValue("country", data.value);
  };

  const onChangeCivility = (data: any) => {
    if (!data) {
      setCivility(initialOption);
    }
    console.log(data);
    setCivility(data);
    formik.setFieldValue("civility", data.value);
  };

  const formik = useFormik({
    initialValues: initialFieldValue,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  if (loading) return <Loading loading={loading} />;
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="py-3 px-4">
        {/**civilité */}
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="civility" className="label uppercase">
                civilité
              </label>
            </div>
            <Select
              id="civility"
              options={civilities}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={civility}
              onChange={onChangeCivility}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="firstname" className="label uppercase">
                Nom
              </label>
            </div>
            <input
              type="text"
              id="firstname"
              {...formik.getFieldProps("firstname")}
              name="firstname"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="lastname" className="label uppercase">
                prenom
              </label>
            </div>
            <input
              type="text"
              id="lastname"
              {...formik.getFieldProps("lastname")}
              name="lastname"
              className="lv-input-custom"
              placeholder={""}
            />
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
              value={country}
              onChange={onChangeContries}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="phone" className="label uppercase">
                téléphone
              </label>
            </div>
            <input
              type="text"
              id="phone"
              {...formik.getFieldProps("lastname")}
              name="phone"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="email" className="label uppercase">
                Email
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
        </div>
        <div className="mt-4">
          <button className="bg-[#CFCFCF] h-[38px] w-[10%] rounded-[9px] text-[#677788] font-bold">
            AJOUTER
          </button>
        </div>
      </div>
      <div className="flex gap-4 justify-end mt-10">
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
          <FormattedMessage id="CANCEL" />
        </button>
        <button
          type="submit"
          className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
        >
          {idBank ? (
            <FormattedMessage id="EDIT" />
          ) : (
            <FormattedMessage id="SAVE" />
          )}
        </button>
      </div>
    </form>
  );
};
