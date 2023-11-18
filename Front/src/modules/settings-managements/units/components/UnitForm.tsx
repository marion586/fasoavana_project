/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedMessage } from "react-intl";

export const UnitForm = () => {
      return (
        <div>
          <h2 className="font-bold text-xl mb-2">
            <FormattedMessage id="SETTING.NEW_UNIT" defaultMessage="Unités - Nouveau" />
          </h2>
          {/**form */}
          <div>
            <div className="flex w-full mt-3 gap-3">
              <div className="basis-[30%]">
                <div className="w-full">
                  <div className="mb-[13px]">
                    <label htmlFor="libelle" className="label uppercase">Libellé</label>
                  </div>
                  <input
                    type="text"
                    id="libelle"
                    name="libelle"
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
        </div>
      );
};
