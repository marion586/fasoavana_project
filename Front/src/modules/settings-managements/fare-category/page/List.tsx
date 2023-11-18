import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import { LvCard } from "@shared/components/LvCard";
import Select from "react-select";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";

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
  return (
    <LvCard>
      <div className="flex justify-between items-center w-full">
        <div className="text-[16px] font-semibold text-black">Catégories tarifaires</div>
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
        <div className="overflow-auto">
          <table className="w-full !rounded-xl table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">Libellé</span>
                  <BiSortAlt2 className="ml-3 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 w-20  text-[#677788]">
                  <span className="text-[10px]">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="!rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span>Groupe</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <div className="w-4 mr-2 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110">
                     <FiEdit3 />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span>Revendeur</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <div className="w-4 mr-2 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110">
                    <FiEdit3 />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span>Installateur</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <div className="w-4 mr-2 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110">
                    <FiEdit3 />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span>Public</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <div className="w-4 mr-2 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110">
                    <FiEdit3 />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
    </LvCard>
  );
};
