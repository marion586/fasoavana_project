import { BiSortAlt2 } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import SVGWidgets from "@/widgets/SVGWidgets";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const navigate = useNavigate()
  return (
    <div>
      <table className="w-full table-fixed">
        <thead className="">
          <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
            <th className="lv-py-3 lv-px-6  w-[20%] text-[#677788] text-center">
              <span className="text-[10px] font-sans">N° BON DE RÉCEPTION</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-center w-[30%] text-[#677788]">
              <span className="text-[10px] font-sans">QUANTITÉ TOTALE BON DE RÉCEPTION </span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th> 
            <th className="lv-py-3 lv-px-6 text-center w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">QUANTITÉ TOTALE SAISIE</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-center w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">OPÉRATEUR</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 text-center lv-px-6 w-[20%] text-[#677788]">
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
                  <span>BRC00{val}</span>
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
                <td className="lv-py-3 lv-px-6 flex gap-2 justify-center text-center">
                  {val > 1 ?  <AiFillCloseCircle size={20} color="red" className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" /> :
                  <BsFillCheckCircleFill size={20} color="green" className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />} 
                  <BsEye onClick={()=> {navigate(`/procurement/check-entry/details/${val}` , {replace :true } )} } size={20} className=" transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                  <SVGWidgets  svgClassName="w-[20px] h-[20px] transform hover:cursor-pointer hover:!text-purple-500 hover:bg-red hover:scale-110" path="media/svg/generate.svg"/>
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
