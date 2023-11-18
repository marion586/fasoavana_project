/* eslint-disable react-hooks/exhaustive-deps */
import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import { LvCard } from "@shared/components/LvCard"
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Select from "react-select"
import { useEffect } from "react";
import { useLoading, useRequest } from "../lib";
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { fetchFamillies } from "../core/actions";
import { setFamillyReset } from "../core/reducers/familly.reducer";
import Loading from "@/shared/components/Loading";
import { Table } from "../components/table";
export const List = () => {
  const navigate = useNavigate()
  const onNavigate = () => {
    navigate("create")
  }

  const itemsOptions = ItemsPerPageChoices?.map((i) => {
    return {
      value: i?.toString(),
      label: i?.toString(),
    };
  });

  const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    console.log(Page, itemsPerPage);
  };

  const request = useRequest();
  const loading = useLoading()
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFamillies(request));
  }, [dispatch, request]);

  useEffect(() => {
    return () => {
      dispatch(setFamillyReset());
    };
  }, []);

  return (
    <LvCard>
      <div className="flex justify-between items-center w-full">
        <div className="text-[16px] font-semibold text-black">Familles / Sous Familles</div>
        <div className="flex justify-end ">
          <button onClick={onNavigate} className="flex items-center justify-center gap-2 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md">
            <AiOutlineUserAdd className="h-6 w-6" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
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
