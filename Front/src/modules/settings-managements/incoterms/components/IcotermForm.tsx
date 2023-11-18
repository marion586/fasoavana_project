/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import Select from "react-select";
import { selectCustomStyle } from "@/shared/libs/FormHelpers";

export const IcotermForm = () => {
  const initialOption = {
    value: "",
    label: "-- Sélectionner --",
  };
  const [type, setType] = useState<{
    value: string;
    label: string;
  }>(initialOption);
  const typeOptions: any[] = [
    initialOption,
    { label: "Type 1", value: "T1" },
    { label: "Type 2", value: "T2" },
    { label: "Type 3", value: "T3" },
  ];

  const onChangeType = (data: any) => {
    if (!data) {
      setType(initialOption);
    }
    setType(data);
  };
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">
        <FormattedMessage
          id="MANAGEMENT_STOCK.NEW_INCOTERM"
          defaultMessage="Incoterms - Nouveau"
        />
      </h2>
      {/**form */}
      <div className="mb-3">
        <div className="mb-[50px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="libelle" className="label uppercase">
                type
              </label>
            </div>
            <Select
              options={typeOptions}
              styles={selectCustomStyle}
              className="w-full"
              isClearable={true}
              value={type}
              onChange={onChangeType}
              placeholder="-- Selectionner --"
              isSearchable
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="intitul" className="label uppercase">
                Libellé
              </label>
            </div>
            <input
              type="text"
              id="intitulé"
              name="intitulé"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="intitul" className="label uppercase">
                abréviation
              </label>
            </div>
            <input
              type="text"
              id="intitulé"
              name="intitulé"
              className="lv-input-custom"
              placeholder={""}
            />
          </div>
        </div>
      </div>
      {/**button action store */}
      <div>
        <div className="flex gap-4 justify-end">
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
      </div>
    </div>
  );
};
