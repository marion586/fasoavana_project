import { BiSortAlt2 } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useResponseData } from "../../lib";
import TableWrapper from "@/widgets/Table/TableWrapper";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const familliesData = useResponseData();
  const navigate = useNavigate()
  return (
    <TableWrapper>
      <thead className="">
        <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
          <th className="lv-py-3 lv-px-6 text-left w-32 text-[#677788]">
            <span className="text-[10px] font-sans">Libellé</span>
            <BiSortAlt2 className="ml-3 inline w-5 h-5 hover:cursor-pointer" />
          </th>
          <th className="lv-py-3 lv-px-6 text-left text-[#677788]">
            <span className="text-[10px] font-sans">Parent</span>
            <BiSortAlt2 className="ml-3 inline w-5 h-5 hover:cursor-pointer" />
          </th>
          <th className="lv-py-3 lv-px-6 w-20  text-[#677788]">
            <span className="text-[10px]">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
        {familliesData.map((familly) => (
          <tr key={familly.id} className="border-b border-gray-200 bg-white hover:bg-gray-100">
            <td className="lv-py-3 lv-px-6">
              <span>{familly?.label}</span>
            </td>
            <td className="lv-py-3 lv-px-6">
              <span>{familly?.parent?.label}</span>
            </td>
            <td className="lv-py-3 lv-px-6 flex">
              <FiEdit3 onClick = {() => navigate("edit/"+familly.id)} className="w-4  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
              <BsTrash className="w-4  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};
