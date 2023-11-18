/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import { LvCard } from "@shared/components/LvCard"
import { FaSearch } from "react-icons/fa";
import Select from "react-select"
import { useLoading, useRequest } from "../lib";
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { fetchEmplacements } from "../core/action";
import { setEmplacementReset } from "../core/reducers/emplacement.reducer";
import LvHearder from "@/shared/components/LvHeader";
import { Table } from "../components/tables";
import Loading from "@/shared/components/Loading";

export const List = () => {
  const request = useRequest();
  const loading = useLoading()
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEmplacements(request));
  }, [dispatch, request]);

  useEffect(() => {
    return () => {
      dispatch(setEmplacementReset());
    };
  }, []);

  const itemsOptions = ItemsPerPageChoices?.map((i) => {
    return {
      value: i?.toString(),
      label: i?.toString(),
    };
  });

  const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    console.log(Page, itemsPerPage);
  };

  return (
    <LvCard>
      <LvHearder title="" to="create" />
      <div className="mt-4 mb-3 flex justify-end">
        <div className="flex items-center gap-2 justify-end">
          <div className="h-[16px] w-[16px] text-[#677788]">
            <FaSearch />
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-[#677788] pr-2"
            type="text"
            id="search"
            placeholder=""
          />
        </div>
      </div>
      <Table />
        {/**pagination */}
        <div className="flex justify-between mt-3">
        <div className="flex gap-2 items-center">
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
            className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[40px] hover:bg-[#0E3B62] hover:!text-white lv-py-2 mr-2"
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
            className="!ml-[8px] text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[40px] hover:bg-[#0E3B62] hover:!text-white lv-py-2"
          >
            Suiv.
          </a>
        </nav>
      </div>
      <Loading loading={loading} />
    </LvCard>
  )
}
