import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "@/shared/components/Loading";
import { FormattedMessage } from "react-intl";
import { materialObject } from "../../core/models/bank.model";

type contactProps = {
  initialFieldValue?: materialObject | any;
};

export const MaterialForm = ({ initialFieldValue }: contactProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { idMaterial } = useParams<{ idMaterial: string | undefined }>();
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
        <div className="mt-[20px] flex gap-11 flex-col justify-between">
          <div className="flex gap-3">
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="name" className="label uppercase">
                  Nom
                </label>
              </div>
              <input
                type="text"
                id="name"
                {...formik.getFieldProps("name")}
                name="name"
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="category" className="label uppercase">
                  categories
                </label>
              </div>
              <Select
                id="category"
                options={initialFieldValue.category}
                styles={selectCustomStyle}
                className="w-full"
                isClearable={true}
                value={initialFieldValue.category[0]}
                onChange={(c) => {
                  console.log(c);
                }}
                placeholder="-- Selectionner --"
                isSearchable
              />
            </div>
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="description" className="label uppercase">
                  description
                </label>
              </div>
              <input
                type="text"
                id="description"
                {...formik.getFieldProps("description")}
                name="description"
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="marque" className="label uppercase">
                  Marque
                </label>
              </div>
              <input
                type="text"
                id="marque"
                {...formik.getFieldProps("marque")}
                name="marque"
                className="lv-input-custom"
                placeholder={""}
              />
            </div>

            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="color" className="label uppercase">
                  Couleur
                </label>
              </div>
              <input
                type="text"
                id="color"
                {...formik.getFieldProps("color")}
                name="color"
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="image" className="label uppercase">
                  Image
                </label>
              </div>
              <input
                type="text"
                id="image"
                {...formik.getFieldProps("image")}
                name="image"
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
          </div>
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
          {idMaterial ? (
            <FormattedMessage id="EDIT" />
          ) : (
            <FormattedMessage id="SAVE" />
          )}
        </button>
      </div>
    </form>
  );
};
