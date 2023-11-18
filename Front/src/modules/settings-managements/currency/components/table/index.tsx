import { BiSortAlt2 } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { GoTrashcan } from "react-icons/go";

export const Table = () => {
  return (
    <div>
      <table className="w-full table-fixed">
        <thead className="">
          <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
            <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">Pays</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 text-left w-[20%] text-[#677788]">
              <span className="text-[10px] font-sans">Référence devise</span>
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6 w-[20%] text-[#677788] text-end">
              <span className="text-[10px]">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
          {[{country: "Madagascar",ref:"MGA",id:1}, {country: "France", ref:"Euro",id:2}].map((currency) => {
            return (
              <tr
                key={currency.id}
                className="border-b border-gray-200 bg-white hover:bg-gray-100"
              >
                <td className="lv-py-3 lv-px-6">
                  <span>{currency.country}</span>
                </td>
                <td className="lv-py-3 lv-px-6">
                  <span>{currency.ref}</span>
                </td>
                <td className="lv-py-3 lv-px-6 flex justify-end">
                  <FiEdit3 className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                  <GoTrashcan className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
