/* eslint-disable react-hooks/exhaustive-deps */
import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import { LvCard } from "@shared/components/LvCard";
import Select from "react-select";
import LvHearder from "@/shared/components/LvHeader";
import { fetchQualities } from "../core/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/apps/store";
import { useEffect } from "react";
import { useLoading, useRequest } from "../lib";
import { setQualityReset } from "../core/reducers/quality.reducer";
import SearchGlobal from "../components/SearchGlobal";
import Loading from "@/shared/components/Loading";
import { Table } from "../components/tables";

export const List = () => {
  const dispatch: AppDispatch = useDispatch();
  const request = useRequest();
  const loading = useLoading()
  const itemsOptions = ItemsPerPageChoices?.map((i) => {
    return {
      value: i?.toString(),
      label: i?.toString(),
    };
  });

  const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    console.log(Page, itemsPerPage);
  };

  useEffect(() => {
    dispatch(fetchQualities({ ...request }));
  }, [dispatch, request]);

  useEffect(() => {
    return () => {
      dispatch(setQualityReset());
    };
  }, []);
  return (
    <LvCard>
      <LvHearder title="Qualités" to="create" />
      <SearchGlobal />
      <div className="font-sans bg-[#F8FAFD] rounded-b-[10px] mt-3">
        <div className="overflow-auto z-50">
        <Table />
        </div>
      </div>

      {/**pagination */}
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 items-center h-">
          <span>Afficher</span>
          <label>
            <Select
              options={itemsOptions}
              value={{
                value: "10",
                label: "10",
              }}
              onChange={(e) => {
                updatePage(1, e?.value ? parseInt(e?.value) : 10);
              }}
              styles={selectCustomPagination}
              isSearchable={false}
            />
          </label>
          <div>sur 0</div>
        </div>
        <nav aria-label="Pagination" className="flex justify-end items-center">
          <a
            href="#"
            className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2 mr-2"
          >
            <span>Préc.</span>
          </a>
          <a
            href="#"
            className="text-center h-[35px] w-[35px] text-white bg-[#0E3B62] rounded hover:bg-[#0E3B62] mr-3 lv-py-2"
          >
            1
          </a>
          <a
            href="#"
            className=" text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2"
          >
            2
          </a>
          <a
            href="#"
            className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2"
          >
            Suiv.
          </a>
        </nav>
      </div>
      <Loading loading={loading} />
    </LvCard>
  );
};

/**
 * 
 * <table className="w-full table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="py-3 px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">Libellé</span>
                  <BiSortAlt2 className="ml-3 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6 w-28  text-[#677788]">
                  <span className="text-[10px]">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
              {qualitiesData.map((quality) => {
                return (
                  <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                    <td className="py-3 px-6">
                      <span>{quality?.label}</span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex">
                        <div className="w-[20px] mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div className="w-[20px] mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
 */