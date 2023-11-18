/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback, useState } from "react";
import { useFormik } from "formik";
import { FormattedMessage } from "react-intl";
import {
  patchDataQuality,
  postDataQuality,
} from "../core/requests/_post_request";
import { useParams } from "react-router-dom";
import { getQuality } from "../core/requests/_get_request";
import Loading from "@/shared/components/Loading";

export const QualityForm = () => {
  const { qualityId } = useParams<{ qualityId: string | undefined }>();
  const [loading, setLoading] = useState<boolean>(false);
  const formik = useFormik<any>({
    initialValues: { label: "", id: "" },
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      if (qualityId) {
        const response = await patchDataQuality(values);
        console.log(response.response);
        if (response?.response?.status === 403) {
          alert(response?.response?.data?.message);
        }
      } else {
        const response = await postDataQuality({ ...values, id: "" });
        console.log(response.response);
        if (response?.response?.status === 403) {
          alert(response?.response?.data?.message);
        }
      }
      setLoading(false);
    },
  });

  const loadQuality = useCallback(async () => {
    if (qualityId) {
      setLoading(true);
      const quality = await getQuality(qualityId);
      if (quality) {
        formik.setValues(quality?.data);
        console.log("quality", quality?.data);
      }
      setLoading(false);
    }
  }, [qualityId]);

  useEffect(() => {
    loadQuality();
  }, [qualityId]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="font-bold text-xl mb-2">
        {qualityId ? (
          <FormattedMessage
            id="SETTING.EDIT_QUALITY"
            defaultMessage="Qualités - Modification"
          />
        ) : (
          <FormattedMessage
            id="SETTING.NEW_QUALITY"
            defaultMessage="Qualités -  Nouveau"
          />
        )}
      </h2>
      {/**form */}
      <div>
        <div className="flex w-full mt-3 gap-3">
          <div className="basis-[30%]">
            <div className="w-full">
              <label htmlFor="label" className="ml-1">
                <span className="label-required uppercase">Libellé</span>
              </label>
              <input
                type="text"
                id="label"
                {...formik.getFieldProps("label")}
                name="label"
                className="lv-input-custom"
                placeholder={""}
              />
            </div>
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
      <Loading loading={loading} />
    </form>
  );
};
