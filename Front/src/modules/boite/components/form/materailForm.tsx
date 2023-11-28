import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "@/shared/components/Loading";
import { FormattedMessage } from "react-intl";
import { materialObject } from "../../core/models/bank.model";
import BoiteService from "../../core/services/_requests";
import { useLoading } from "../../lib";
import { setLoadingRequest } from "../../core/reducers/bank.reducer";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";

type contactProps = {
  initialFieldValue?: materialObject | any;
};

export const MaterialForm = ({ initialFieldValue }: contactProps) => {
  const navigate = useNavigate();
  const loading = useLoading();
  const dispatch = useDispatch();
  const [urlImgData, setUrlImgData] = useState<string>("");

  const { idMaterial } = useParams<{ idMaterial: string | undefined }>();
  const formik = useFormik({
    initialValues: initialFieldValue,
    onSubmit: async (values) => {
      dispatch(setLoadingRequest(true));
      try {
        console.log(values, idMaterial);
        const newData = {
          ...values,
          image: urlImgData,
        };

        const response = idMaterial
          ? await BoiteService.updateBoiteById(idMaterial, newData)
          : await BoiteService.addBoite(newData);

        if (response && !idMaterial) {
          console.log(response, "boite");
          const etiquette = await BoiteService.addEtiquette({
            id_boite: response?.data?._id,
            reference: response?.data?.reference + "--Etiquette",
            status: "disponnible",
          });

          console.log(etiquette);
        }
        dispatch(setLoadingRequest(false));
        toast.success(
          idMaterial
            ? "Mise à jour de materiel efectuer"
            : "matériel crée avec success",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        navigate(-1);
        console.log("data response", response);
      } catch (error) {
        dispatch(setLoadingRequest(false));
        toast.success("un erreur au création ou mise à jour du matériel", {
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
    },
  });
  // useEffect(() => {
  //   console.log(urlImgData);
  // }, [urlImgData]);

  if (loading) return <Loading loading={loading} />;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="py-3 px-4">
        <div className="mt-[20px] flex gap-11 flex-col justify-between">
          <div className="flex gap-3">
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="reference" className="label uppercase">
                  REFERENCE
                </label>
              </div>
              <input
                type="text"
                id="reference"
                {...formik.getFieldProps("reference")}
                name="reference"
                className="lv-input-custom"
                placeholder={""}
                required={true}
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
                required={true}
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
            <div className="basis-[32%]">
              <div className="mb-[10px]">
                <label htmlFor="location" className="label uppercase">
                  Location
                </label>
              </div>
              <input
                type="text"
                id="location"
                {...formik.getFieldProps("location")}
                name="location"
                required={true}
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
          className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#9b9898] selection:lv-btn-primary  rounded-[3px] shadow-md"
        >
          {idMaterial ? (
            <FormattedMessage id="EDIT" />
          ) : loading ? (
            <Loading loading={loading} />
          ) : (
            <FormattedMessage id="SAVE" />
          )}
        </button>
      </div>
    </form>
  );
};
