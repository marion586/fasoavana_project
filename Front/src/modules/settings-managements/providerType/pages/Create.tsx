/* eslint-disable @typescript-eslint/no-explicit-any */
import { LvCard } from "@/shared/components/LvCard";
import { useFormik } from "formik";
import { FormattedMessage } from "react-intl";

const Create = () => {
  const formik = useFormik({
    initialValues: { name: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <LvCard>
      <div>
        <h1 className="text-[20px] font-[500] text-black">Type de fournisseur</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-[20px] flex justify-between">
          <div className="basis-[32%]">
            <div className="mb-[10px]">
              <label htmlFor="type" className="label uppercase">
              type fournisseur
              </label>
            </div>
            <input
              type="text"
              id="type"
              name="type"
              className="lv-input-custom"
              placeholder={""}
            />
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
