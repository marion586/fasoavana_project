/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import { LvCard } from "@shared/components/LvCard";
import Select from "react-select";
import { AiOutlineUserAdd } from "react-icons/ai";
// import { BiSortAlt2 } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Table } from "../components/table";
import { useRequest } from "../lib";
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { fetchRoles } from "../core/action";
import { setRoleReset } from "../core/reducers/role.reducer";

export const List = () => {
  const navigate = useNavigate();
  const itemsOptions = ItemsPerPageChoices?.map((i) => {
    return {
      value: i?.toString(),
      label: i?.toString(),
    };
  });

  const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    console.log(Page, itemsPerPage);
  };
  const onCreateRole = () => {
    navigate("create");
  };

  const request = useRequest();
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRoles(request));
  }, [dispatch, request]);

  useEffect(() => {
    return () => {
      dispatch(setRoleReset());
    };
  }, []);
  return (
    <LvCard>
      <div className="flex justify-between items-center w-full">
        <div className="text-[16px] font-semibold text-black">Roles</div>
        <div className="flex justify-end ">
          <button
            onClick={onCreateRole}
            className="flex items-center justify-center gap-2 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            <AiOutlineUserAdd className="h-6 w-6" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
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

      <div className="font-sans bg-[#F8FAFD] rounded-b-[10px] mt-3">
        <div className="overflow-auto z-50">
          <Table />
        </div>
      </div>

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
    </LvCard>
  );
};
/**
 *   <table className="w-full table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="py-3 px-4 w-32 text-[#677788]">
                  <span className="text-[10px] font-sans">Libellé</span>
                  <BiSortAlt2 className="ml-3 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-4  text-[#677788]">
                  <span className="text-[10px] font-sans">
                    supply chain manager
                  </span>
                  <BiSortAlt2 className="ml-3 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-4  w-28  text-[#677788]">
                  <span className="text-[10px]">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="py-3 px-4 text-center">
                  <span>Steve</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="bg-[#6AD860] text-white py-1 px-3 rounded-md text-xs uppercase">
                    Oui
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
            </tbody>
          </table>
 */