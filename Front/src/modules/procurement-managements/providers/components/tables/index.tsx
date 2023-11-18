import { AiOutlineEye } from "react-icons/ai"
import { BiSortAlt2 } from "react-icons/bi"
import { FiEdit3 } from "react-icons/fi"
import { GoTrashcan } from "react-icons/go"

export const Table = () => {
  return (
    <div>
         <table className="w-full table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
                  <span className="text-[10px] font-sans">Référence Fournisseur</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
                  <span className="text-[10px] font-sans">Type fournisseur</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">Type</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left  w-[20%] text-[#677788]">
                  <span className="text-[10px] font-sans">Intitulé fournisseur</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">pays</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">Ville</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 w-40  text-[#677788]">
                  <span className="text-[10px]">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span>RFN001</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>Outil informatique</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>Import</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>SARL SMAP</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>Madagascar</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>Antananarivo</span>
                </td>
                <td className="lv-py-3 lv-px-6 flex justify-center">
                    <AiOutlineEye className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <FiEdit3 className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <GoTrashcan className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                </td>
              </tr>
            </tbody>
      </table>
    </div>
  )
}
