/* eslint-disable @typescript-eslint/no-explicit-any */
import { LvCard } from "@/shared/components/LvCard";
import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import Select from "react-select";
import { useFormik } from "formik";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

const Create = () => {
  const initialOption = {
    value: "",
    label: "-- Sélectionner --",
  };
  const [country, setCountry] = useState<{
    value: string;
    label: string;
  }>(initialOption);
  const countriesOptions: any[] = [
    initialOption,
    { label: "France", value: "Q1" },
    { label: "Brésil", value: "Q2" },
    { label: "Japon", value: "Q3" },
  ];

  const onChangeCountry = (data: any) => {
    if (!data) {
      setCountry(initialOption);
    }
    setCountry(data);
  };

  const formik = useFormik({
    initialValues: { name: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <LvCard>
      <div>
        <h1 className="text-[20px] font-[500] text-black">Devises - Nouveau</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="civility" className="label uppercase">
                Pays
              </label>
            </div>
            <Select
              id="civility"
              options={countriesOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={country}
              onChange={onChangeCountry}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="ref_currency" className="label uppercase">
                référence devis
              </label>
            </div>
            <input
              type="text"
              id="ref_currency"
              name="ref_currency"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
          </div>
        </div>
        <div className="flex gap-4 justify-end mt-10">
          <button
            type="submit"
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
      </form>
    </LvCard>
  );
};

export default Create;
