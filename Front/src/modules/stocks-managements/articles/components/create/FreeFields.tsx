/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider } from "antd";
import {MdOutlineAttachFile} from "react-icons/md"
import {SlPicture} from "react-icons/sl"
import { useDataBody, useDataBodyFreeField } from "../../lib";
import { store } from "@/apps/store";
import { useFormik } from "formik";
import { setArticleForm } from "../../core/reducers/acticleForm.reducer";
import { useEffect } from "react";
export const FreeFields = () => {
  const freeFieldData = useDataBodyFreeField()
  const storeArticleForm = useDataBody();
  const formik = useFormik<any>({
    initialValues: freeFieldData,
    onSubmit: () => {
      /** */
    },
  });
  useEffect(() => {
    store.dispatch(
      setArticleForm({ ...storeArticleForm, champLibre: formik.values })
    );
  }, [formik.values]);
  return (
    <div>
      <div className="flex items-center">
        <div className="basis-[15%]">
          <button className="lv-btn-light">Informations libres</button>
        </div>
        <div className="flex flex-col  basis-[1%]">
          <div className="bg-[#D6D6D6] h-[190px] w-[1px]"></div>
        </div>
        <div className="basis-[80%]">
          <div className="flex gap-5 items-center mt-2">
            <div className="basis-[20%]">
              <label
                htmlFor="premierCommercialisation"
                className="text-[#677788] font-light"
              >
                1er commercilisation
              </label>
            </div>
            <div className="basis-[100%]">
              <input
                id="premierCommercialisation"
                {...formik.getFieldProps("premierCommercialisation")}
                type="date"
                className="lv-input-custom w-[50%] text-[#677788]"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center mt-2">
            <div className="basis-[20%]">
              <label
                htmlFor="marqueCommerciale"
                className="text-[#677788] font-light"
              >
                Marque commerciale
              </label>
            </div>
            <div className="basis-[100%]">
              <input
                id="marqueCommerciale"
                {...formik.getFieldProps('marqueCommerciale')}
                className="lv-input-custom  text-[#677788]"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center mt-2">
            <div className="basis-[20%]">
              <label
                htmlFor="objectifQuantiteVendu"
                className="text-[#677788] font-light"
              >
                Objectif / Qté vendu
              </label>
            </div>
            <div className="basis-[100%]">
              <input
                id="objectifQuantiteVendu"
                type="number"
                {...formik.getFieldProps("objectifQuantiteVendu")}
                className="lv-input-custom  text-[#677788]"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider orientation="right" />
      <div className="flex items-center">
        <div className="basis-[15%]">
          <button className="lv-btn-light">Documents attachés</button>
        </div>
        <div className="flex flex-col  basis-[1%]">
          <div className="bg-[#D6D6D6] h-[190px] w-[1px]"></div>
        </div>
        <div className="basis-[80%]">
          <div className="flex gap-5 items-center mt-2">
            <div className="basis-[20%]">
              <label
                htmlFor="designation"
                className="text-[#677788] font-light"
              >
                PJ fiche technique
              </label>
            </div>
            <div className="basis-[100%]">
              <div className="flex items-center">
              <input
                id="designation"
                className="lv-input-custom  text-[#677788] w-[50%]"
                type="text"
              />
              <div>
                <label htmlFor="attach">
                   <MdOutlineAttachFile className="hover:rotate-45 h-[30px] w-[29px] hover:cursor-pointer" />
                </label>
                <input type="file" id="attach" className="hidden" />
              </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-2">
            <div className="basis-[20%]">
              <label
                htmlFor="designation"
                className="text-[#677788] font-light"
              >
                URL fiche technique
              </label>
            </div>
            <div className="basis-[100%]">
              <input
                id="designation"
                {...formik.getFieldProps('urlFicheTechnique')}
                className="lv-input-custom  text-[#677788]"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center mt-2">
            <div className="basis-[20%]">
              <label
                htmlFor="referenceFabriquant"
                className="text-[#677788] font-light"
              >
                Référence fabriquant
              </label>
            </div>
            <div className="basis-[100%]">
              <input
                id="referenceFabriquant"
                {...formik.getFieldProps("referenceFabriquant")}
                className="lv-input-custom w-[50%] text-[#677788]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-5 h-full w-full">
        <div className="basis-[10%]">
          <SlPicture className="h-36 text-[#CAEDEB] w-36"/>
        </div>
        <div className="basis-[10%]">
          <SlPicture className="h-36 text-[#CAEDEB] w-36"/>
        </div>
      </div>
    </div>
  );
};
