/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from "@/modules/procurement-managements/providers/components/pagination";
import SearchGlobal from "@/shared/components/SearchGlobal";
import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import { itemsNormal } from "../../data/data";
import EllipsisDoubleVertical from "@/shared/components/EllipsisDoubleVertical";
export const CompletedTab = () => {
  const [isShowTable, setIsShowTable] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-[#7A8897] flex gap-2 items-center">
          <div>Affichage</div>
          <div
            onClick={() => setIsShowTable(true)}
            className="ml-3 h-[35px] w-[35px] rounded-md flex justify-center items-center bg-[#F5F5F5]"
          >
            <TfiMenu className="h-[25px] w-[25px] text-[#677788] transform hover:scale-105  hover:cursor-pointer" />
          </div>
          <div
            onClick={() => setIsShowTable(false)}
            className="h-[35px] w-[35px] rounded-md flex justify-center items-center bg-[#F5F5F5]"
          >
            <MdDashboard className="h-[25px] w-[25px] text-[#677788] transform hover:scale-125 hover:cursor-pointer" />
          </div>
        </div>
        <SearchGlobal />
      </div>
      <div className="my-4">
        {isShowTable ? <TableCompleted /> : <MultiTableCompleted />}
      </div>
      <Pagination />
    </div>
  );
};

export const TableCompleted = () => {
    const [data] = useState<any>(itemsNormal);
    const [rowId, setRowId] = useState<any[]>([]);

    const showChild = (id: string) => {
      setRowId([...rowId, id]);
    };
  
    const hideChild = (id: string) => {
      const list = rowId.filter((_id: any) => id != _id);
      setRowId(list);
    };
  return (
    <div>
         <table className="w-full table-fixed">
        <thead className="uppercase">
          <tr className="bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] font-normal text-[12px]">
            <th className="lv-py-3 lv-px-6">
              tache{" "}
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6">
              date{" "}
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6">
              désignation{" "}
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6">
              Quantité{" "}
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
            <th className="lv-py-3 lv-px-6">
              statut{" "}
              <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
            </th>
          </tr>
        </thead>
        <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
          {data?.mouvement?.map((mouvement: any, index: number) => {
            return (
              <>
                <tr
                  key={index}
                  className="border-b border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="lv-py-3 lv-px-6">
                  {rowId.includes(mouvement.id) ? (
                                  <BsDashCircle
                                    onClick={() => hideChild(mouvement.id)}
                                    className="inline mr-2 cursor-pointer"
                                  />
                                ) : (
                                  <BsPlusCircle
                                    onClick={() => showChild(mouvement.id)}
                                    className="inline mr-2 cursor-pointer"
                                  />
                                )}
                                {mouvement.task}
                  </td>
                  <td className="lv-py-3 lv-px-6 text-center">
                    {mouvement.date}
                  </td>
                  <td className="lv-py-3 lv-px-6 text-center">
                    {mouvement.design}
                  </td>
                  <td className="lv-py-3 lv-px-6 text-center">
                    {mouvement.qty}
                  </td>
                  <td className="lv-py-3 lv-px-6 text-center">
                    {mouvement.status}
                  </td>
                </tr>
                {rowId.includes(mouvement.id) && mouvement?.articles?.map((article:any,index:number) =>(
                  <tr key={index} className="border-b border-gray-200 bg-white hover:bg-gray-100">
                    <td className="lv-py-3 lv-px-6 ">
                    <div className="!ml-7">
                                     <EllipsisDoubleVertical>{article?.task}</EllipsisDoubleVertical>
                                </div>
                    </td>
                    <td className="lv-py-3 lv-px-6 text-center">
                      {article?.date}
                    </td>
                    <td className="lv-py-3 lv-px-6 text-center">
                      {article?.design}
                    </td>
                    <td className="lv-py-3 lv-px-6 text-center">
                    {article?.subtitle}
                    </td>
                    <td className="lv-py-3 lv-px-6 text-center">
                    active
                    </td>
                  </tr>
                )) }
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export const MultiTableCompleted = () => {
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
          {operator1.map((op: any, index: number) => (
            <>
              <tr key={index}>
                <td className="lv-py-3 lv-px-6">
                  <div className="flex gab-5">
                    <div className="flex">
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
                    </div>
                    <div className="basis-[100%] ml-3 flex  gap-24 items-start">
                      <div className="bottom-[30%] ">
                        Bon de réception <div>#002</div>
                      </div>
                      <div>06/06/2023</div>
                      <div className="text-end">Traité</div>
                    </div>
                  </div>
                </td>
              </tr>
              {rowId.includes(op.id) &&
                op?.articles?.map((article: any, indexchild: number) => (
                  <tr key={indexchild}>
                    <td className="pb-2 pt-1 pl-20 ">{article.task}</td>
                  </tr>
                ))}
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
          {operator2.map((op2: any, index: number) => (
            <>
              <tr key={index}>
                <td className="lv-py-3 lv-px-6">
                  <div className="flex gab-5">
                    <div className="flex">
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
                    </div>
                    <div className="basis-[100%] ml-3 flex  gap-24 items-start">
                      <div className="bottom-[30%] ">
                        Bon de réception <div>#002</div>
                      </div>
                      <div>06/06/2023</div>
                      <div className="text-end">Traité</div>
                    </div>
                  </div>
                </td>
              </tr>
              {rowId1.includes(op2.id) &&
                op2?.articles?.map((article: any, indexchild: number) => (
                  <tr key={indexchild}>
                    <td className="pb-2 pt-1 pl-20 ">{article.task}</td>
                  </tr>
                ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
