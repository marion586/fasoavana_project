import { BiSortAlt2 } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { useResponseData } from "../../lib";
import { GoTrashcan } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const catalogData = useResponseData();
  const navigation = useNavigate()
  return (
    <table className="w-full table-fixed">
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
      <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
        {catalogData.map((catalog) => (
          <tr key={catalog.id} className="border-b border-gray-200 bg-white hover:bg-gray-100">
            <td className="lv-py-3 lv-px-6">
              <span>{catalog.label}</span>
            </td>
            <td className="lv-py-3 lv-px-6 flex justify-center">
                <FiEdit3 onClick={() => navigation("edit/"+catalog.id)} className="w-5 h-5 mr-2 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                <GoTrashcan className="w-5 h-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
