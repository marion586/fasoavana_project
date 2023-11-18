/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchGlobal from "@/shared/components/SearchGlobal";
import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import Select from "react-select";
import { BiSortAlt2 } from "react-icons/bi";
import { useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { ProgressLine } from "@/shared/components/ProgressLine";

export const TodoTab = () => {
  const itemsOptions = ItemsPerPageChoices?.map((i) => {
    return {
      value: i?.toString(),
      label: i?.toString(),
    };
  });

  const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    console.log(Page, itemsPerPage);
  };

  const operator1: any[] = [
    {
      id: 10,
      uuid: "5620f20-9393-4c4d-b72c-7fa4398a450",
      task: "Where can I get some?",
      subtitle: "There are many variations",
      articles: [
        {
          id: 161,
          uuid: "0070-9899-2393-4c4d-b2c-7bfa4351",
          task: "nojas Morbi sagittis tellus a efficitur",
          subtitle: "porkas B Etiam mollis eros eget mi.",
          date: "04/09/22",
          design: "design Cgraci por que aze hola",
        },
        {
          id: 162,
          uuid: "dd2774-8f4444555-393-4c4d-b2c-7bfa4398a451",
          task: "porque Alo AMorbi sagittis tellus a efficitur",
          subtitle: "muchacho Que B Etiam mollis eros eget mi.",
          date: "02/23/22",
          design: "SX Cgraci por que aze hola",
        },
      ],
      date: "6 days ago",
      design: "por que aze hola",
      qty: 12,
      status: "active",
    },
  ];

  const operator2: any[] = [
    {
      id: 10,
      uuid: "5620f20-9393-4c4d-b72c-7fa4398a450",
      task: "Where can I get some?",
      subtitle: "There are many variations",
      articles: [
        {
          id: 161,
          uuid: "0070-9899-2393-4c4d-b2c-7bfa4351",
          task: "nojas Morbi sagittis tellus a efficitur",
          subtitle: "porkas B Etiam mollis eros eget mi.",
          date: "04/09/22",
          design: "design Cgraci por que aze hola",
        },
        {
          id: 162,
          uuid: "dd2774-8f4444555-393-4c4d-b2c-7bfa4398a451",
          task: "porque Alo AMorbi sagittis tellus a efficitur",
          subtitle: "muchacho Que B Etiam mollis eros eget mi.",
          date: "02/23/22",
          design: "SX Cgraci por que aze hola",
        },
      ],
      date: "6 days ago",
      design: "por que aze hola",
      qty: 12,
      status: "active",
    },
  ];

  const [rowId, setRowId] = useState<any[]>([]);

  const showChild = (id: string) => {
    setRowId([...rowId, id]);
  };

  const hideChild = (id: string) => {
    const list = rowId.filter((_id: any) => id != _id);
    setRowId(list);
  };

  const [rowId1, setRowId1] = useState<any[]>([]);

  const showChild1 = (id: string) => {
    setRowId1([...rowId, id]);
  };

  const hideChild1 = (id: string) => {
    const list = rowId.filter((_id: any) => id != _id);
    setRowId1(list);
  };

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <div className="text-[#7A8897]">AUCUN</div>
        <SearchGlobal />
      </div>
      <div className="flex">
        <table className="w-[50%] table-fixed">
          <thead className="uppercase">
            <tr className="bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] font-normal text-[12px]">
              <th className="lv-py-3 lv-px-6">
                Operateur 1
                <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
              </th>
            </tr>
          </thead>
          <tbody className="rounded-md bg-white  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
            {operator1.map((op: any,index:number) => (
              <>
              <tr key={index}>
                <td className="lv-py-3 lv-px-6">
                  <div className="flex justify-around items-start">
                  {rowId.includes(op.id) ? (
                                  <BsDashCircle
                                    onClick={() => hideChild(op.id)}
                                    className="inline mt-1 cursor-pointer"
                                  />
                                ) : (
                                  <BsPlusCircle
                                    onClick={() => showChild(op.id)}
                                    className="inline mt-1 cursor-pointer"
                                  />
                                )}
                   <div className="bottom-[30%]">
                      Bon de réception <div>#002</div>
                   </div> 
                   <div>
                      06/06/2023 06/06/2023 06/06/2023 
                    </div>    
                    <div>
                      En cours 
                    </div>
                    <div className="flex items-start -mt-2">
                       <ProgressLine percent={33.33} />
                    </div>
                           
                  </div>
                </td>
              </tr>
              {rowId.includes(op.id) && op?.articles?.map((article:any,indexchild:number) =>
                <tr key={indexchild}>
                   <td className="pb-2 pt-1 pl-20 ">
                      {article.task}
                   </td>
                </tr>
              )}
              </>
            ))}
          </tbody>
        </table>
        <table className="w-[50%] table-fixed">
          <thead className="uppercase">
            <tr className="bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] font-normal text-[12px]">
              <th className="lv-py-3 lv-px-6">
                Operateur 2
                <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
              </th>
            </tr>
          </thead>
          <tbody className="rounded-md bg-white  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
            {operator2.map((op2: any,index:number) => (
              <>
              <tr key={index}>
                <td className="lv-py-3 lv-px-6">
                  <div className="flex justify-around items-start">
                  {rowId1.includes(op2.id) ? (
                                  <BsDashCircle
                                    onClick={() => hideChild1(op2.id)}
                                    className="inline mt-1 cursor-pointer"
                                  />
                                ) : (
                                  <BsPlusCircle
                                    onClick={() => showChild1(op2.id)}
                                    className="inline mt-1 cursor-pointer"
                                  />
                                )}
                   <div className="bottom-[30%]">
                      Bon de réception <div>#002</div>
                   </div> 
                   <div>
                      06/06/2023 06/06/2023 06/06/2023 
                    </div>    
                    <div>
                      En cours 
                    </div>
                    <div className="flex items-start -mt-2">
                       <ProgressLine percent={33.33} />
                    </div>
                           
                  </div>
                </td>
              </tr>
              {rowId1.includes(op2.id) && op2?.articles?.map((article:any,indexchild:number) =>
                <tr key={indexchild}>
                   <td className="pb-2 pt-1 pl-20 ">
                      {article.task}
                   </td>
                </tr>
              )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 items-center h-">
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
            className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2 mr-2"
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
            className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2"
          >
            Suiv.
          </a>
        </nav>
      </div>
    </div>
  );
};

/**
 * <div className="flex">
        <table className="w-[50%] table-fixed">
          <thead className="uppercase">
            <tr className="bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] font-normal text-[12px]">
              <th className="lv-py-3 lv-px-6">
                Operateur 1
                <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
              </th>
            </tr>
          </thead>
          <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
            <tr>
              <td className="lv-py-3 lv-px-6 text-center">blamm</td>
            </tr>
          </tbody>
        </table>
        <table className="w-[50%] table-fixed">
          <thead className="uppercase">
            <tr className="bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] font-normal text-[12px]">
              <th className="lv-py-3 lv-px-6">
                Operateur 2
                <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
              </th>
            </tr>
          </thead>
          <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
            <tr>
              <td className="lv-py-3 lv-px-6 text-center">blamm</td>
            </tr>
          </tbody>
        </table>
      </div>
 */
