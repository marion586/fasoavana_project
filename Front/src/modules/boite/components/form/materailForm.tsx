import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "@/shared/components/Loading";
import { FormattedMessage } from "react-intl";
import { materialObject } from "../../core/models/bank.model";
import MaterialService from "../../core/services/_requests";
import { useLoading } from "../../lib";
import { setLoadingRequest } from "../../core/reducers/bank.reducer";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const materialSchema = yup.object().shape({
  name: yup.string().required("required"),
  category: yup.string().required("required"),
  image: yup.string().required("required"),
  description: yup.string().required("required"),
  color: yup.string().required("required"),
  marque: yup.string().required("required"),
});
type contactProps = {
  initialFieldValue?: materialObject | any;
  categoryData: any;
};

export const MaterialForm = ({
  initialFieldValue,
  categoryData,
}: contactProps) => {
  const navigate = useNavigate();
  const loading = useLoading();
  const dispatch = useDispatch();
  const [urlImgData, setUrlImgData] = useState<string>("");
  const [inputFile, setInputFile] = useState<string>("");
  const [requiredPicture, setRequiredPicture] = useState(false);
  const [category, setCategory] = useState<any>(initialFieldValue.category);
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
          category: category.value,
        };

        const response = idMaterial
          ? await MaterialService.updateMaterialById(idMaterial, newData)
          : await MaterialService.addMaterial(newData);
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
  function handleDeletePhoto() {
    setUrlImgData("");
    setInputFile("");
  }

  function handleAddPhoto(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if ((e.target as any).result) {
        setUrlImgData((e.target as any).result);
      }
    };
    reader.readAsDataURL(file);

    console.log(urlImgData);
  }
  useEffect(() => {
    if (urlImgData) {
      setRequiredPicture(false);
    }
  }, [urlImgData]);
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
                required={true}
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
                options={categoryData}
                styles={selectCustomStyle}
                className="w-full"
                required={true}
                isClearable={true}
                value={initialFieldValue.category}
                onChange={(c) => {
                  console.log(c);
                  setCategory(c);
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={requiredPicture}
                type="file"
                id="image"
                {...formik.getFieldProps("image")}
                name="image"
                onChange={handleAddPhoto}
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
