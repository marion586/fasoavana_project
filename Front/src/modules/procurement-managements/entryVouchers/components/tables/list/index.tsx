/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineEye } from "react-icons/ai"
import { BiSortAlt2 } from "react-icons/bi"
import { useNavigate } from "react-router"



const fakeData = [{
  id: 1,
  entryVocher: "BE001",
  date: '05/02/2023',
  receiptSlips: "BR001",
  purchaseOrders: "BC001",
  providerName: "GAIA",
}]

export const Table = () => {
  const navigate = useNavigate();
  const navigateToVisualization = (id:any) => {
    navigate(`visualization/${id}`)
  }
  return (
    <div>
         <table className="w-full table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
                  <span className="text-[10px] font-sans">N° BON D'ENTRÉE</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
                  <span className="text-[10px] font-sans">DATE </span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">N° BON DE RÉCEPTION</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left  w-[20%] text-[#677788]">
                  <span className="text-[10px] font-sans">N° BON DE COMMANDE</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
                  <span className="text-[10px] font-sans">NOM FOURNISSEUR</span>
                  <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
                </th>
              
                <th className="lv-py-3 lv-px-6 w-40  text-[#677788]">
                  <span className="text-[10px]"></span>
                </th>
              </tr>
            </thead>
        <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
          
          {
            fakeData.map((item: any, key: number) =>
            (<tr key={key} className="border-b border-gray-200 bg-white hover:bg-gray-100">
                <td className="lv-py-3 lv-px-6">
                  <span> {item.entryVocher} </span>
                </td>
                <td className="lv-py-3 lv-px-6">
                <span>{item.date}</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span> {item.receiptSlips} </span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span> {item.purchaseOrders} </span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span> {item.providerName} </span>
                </td>
            
                <td className="lv-py-3 lv-px-6 flex justify-center">
                    <AiOutlineEye onClick={()=>navigateToVisualization(item.id)}  size={20} className="transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/> 
                </td>
              </tr>))
          }
            </tbody>
      </table>
    </div>
  )
}
