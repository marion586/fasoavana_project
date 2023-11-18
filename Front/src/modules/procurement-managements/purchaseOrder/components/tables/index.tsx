import { AiOutlineEye } from "react-icons/ai"
import { BiSortAlt2 } from "react-icons/bi"
import { ImFilePdf } from "react-icons/im"
import { GoTrashcan } from "react-icons/go"

export const Table = () => {
  return (
    <div>
         <table className="w-full table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="text-left py-3 pl-2 w-[25%] text-[#677788]">
                  <span className="text-[10px] font-sans">Dossier d’import</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="text-left py-3 w-[25%] text-[#677788]">
                  <span className="text-[10px] font-sans">N° Bon de commande</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="text-left py-3 w-[25%] text-[#677788]">
                  <span className="text-[10px] font-sans">N° Bon de réception</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="text-left py-3  w-[25%] text-[#677788]">
                  <span className="text-[10px] font-sans">Date de création</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="text-left py-3 w-[25%] text-[#677788]">
                  <span className="text-[10px] font-sans">Référence fournISSEUR</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="text-left py-3 w-[25%]  text-[#677788]">
                  <span className="text-[10px] font-sans">Nom fournisseur</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 w-[20%] text-center text-[#677788]">
                  <span className="text-[10px] font-sans">Incoterm</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="w-40 py-3 text-[#677788]">
                  <span className="text-[10px]">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span>59648</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>BC8878</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>BR7854</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>30/05/2023</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>REF FR0326814</span>
                </td>
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>AIA</span>
                </td>
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>EXW</span>
                </td>
                <td className="lv-py-3 lv-px-6 flex justify-center">
                    <AiOutlineEye className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <ImFilePdf className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <GoTrashcan className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                </td>
              </tr>
            </tbody>
      </table>
    </div>
  )
}
