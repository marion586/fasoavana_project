/* eslint-disable react-hooks/exhaustive-deps */
import {useMemo} from "react"
//import { useAppDispatch } from "@/apps/hooks/app.hooks";
//import { AppDispatch } from "@/apps/store";
//import { BiSortAlt2 } from "react-icons/bi";
//import { FiEdit3 } from "react-icons/fi";
//import { GoTrashcan } from "react-icons/go";
//import { fetchBanks } from "../../core/actions";
//import { useRequest, useResponseData } from "../../lib";
//import { setBankReset } from "../../core/reducers/bank.reducer";
import { bankColumns } from "./_column";
import { useTable } from "react-table";
import TableWrapper from "@/widgets/Table/TableWrapper";
import { TableHeader } from "@/widgets/Table/TableHeader";
import { TableBody } from "@/widgets/Table/TableBody";
import { useLoading, useResponseData } from "../../lib";
import { BankModel } from "../../core/models/bank.model";
import Loading from "@/shared/components/Loading";

export const Table = () => {
  const  bankData:BankModel[] = useResponseData()
  const isLoading =useLoading()
  const data = useMemo(() => bankData, [bankData])
  const columns = useMemo(() => bankColumns, [])
  const {headers} = useTable({
      columns, data,
  })
  
  return (
     <TableWrapper>
       <TableHeader headers={headers} />
       <TableBody columns={columns} data={data} />
       <Loading loading={isLoading} />
     </TableWrapper>
  )
};

/**
 * 
 *   <table className="w-full table-fixed">
        <thead className="">
          <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
            <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">banque</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">Abréviation</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">téléphone</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">code swift</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 w-[20%] text-[#677788]">
              <span className="text-[10px]">Actions</span>
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
                <td className="lv-py-3 lv-px-6">
                  <span>Bank of africa {val}</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>BOA {val}</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>+524133574{val}</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>10{val}</span>
                </td>
                <td className="lv-py-3 lv-px-6 flex justify-center">
                  <FiEdit3 className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                  <GoTrashcan className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
 */
