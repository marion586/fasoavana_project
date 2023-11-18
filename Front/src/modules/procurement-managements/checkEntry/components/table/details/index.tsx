import { BiSortAlt2 } from "react-icons/bi";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const Table = () => {

  return (
    <div>
      <table className="w-full table-fixed">
        <thead className="">
          <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
            <th className="lv-py-3 lv-px-6 text-center w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">RÉFÉRENCE ARTICLE</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-center w-[30%] text-[#677788]">
              <span className="text-[10px] font-sans">DÉSIGNATION </span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th> 
            <th className="lv-py-3 lv-px-6 text-center w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">QUANTITÉ TOTALE BR</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-center w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">  QUANTITÉ TOTALE SAISIE </span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-center w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans"> OPÉRATEUR </span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 w-[20%] text-center text-[#677788]">
              <span className="text-[10px]">ECART</span>
               <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
               <th className="lv-py-3 lv-px-6 w-[20%] text-[#677788]">
              <span className="text-[10px]">CONFORME</span>
            </th>
          </tr>
        </thead>
        <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
          {[1, 2].map((val: number) => {
            return (
              <tr
                key={val}
                className="border-b border-gray-200 bg-white hover:bg-gray-100"
              >
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>REFART00{val}</span>
                </td>
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>CABLE RESEAU C400{val}</span>
                </td>
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>{val}00</span>
                </td>
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>{val}00</span>
                </td>
                <td className="lv-py-3 lv-px-6 text-center">
                  <span>OPERATEUR {val}</span>
                </td>
                  <td className="lv-py-3 lv-px-6 text-center">
                  <span> {val}</span>
                </td>
                <td className="lv-py-3 lv-px-6 flex gap-5 justify-center text-center">
                  {val <= 1 ? <> <AiFillCloseCircle size={20} color="red" className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />  
                  <AiOutlineInfoCircle size={20} className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" /></> :
                  <BsFillCheckCircleFill size={20} color="green" className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110 mr-10" />} 
                  <FiMessageSquare size={20} className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" /> 
                </td>
              </tr>
            );
          })}
        </tbody>  
      </table>
    </div>
  );
};
