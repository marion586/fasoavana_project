/* eslint-disable @typescript-eslint/ban-types */
import EllipsisDoubleVertical from "@shared/components/EllipsisDoubleVertical";
import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { BiSortAlt2 } from "react-icons/bi";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProgressTable = ({
  progress,
  setProgress,
}: {
  progress: any;
  setProgress: Function;
}) => {
  console.log(setProgress ? 1 : 3);
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
          {progress?.mouvement?.map((mouvement: any, index: number) => {
            return (
              <>
                <tr
                  key={index}
                  className="border-b border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="lv-py-3 lv-px-6">
                    <Droppable droppableId="mouvementTable">
                      {(provided, snapshot) => (
                        <div
                          className={`${snapshot.isDraggingOver ? "" : ""}`}
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <Draggable
                            draggableId={mouvement.uuid}
                            index={index}
                            key={mouvement.id}
                          >
                            {(provided /*snapshot*/) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                // className="flex gap-2 items-center mt-2 ml-3"
                              >
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
                              </div>
                            )}
                          </Draggable>
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
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
                  <tr key={article.uuid} className="border-b border-gray-200 bg-white hover:bg-gray-100">
                    <td className="lv-py-3 lv-px-6 ">
                      <Droppable droppableId="mouvementTableChild">
                      {(provided, snapshot) => (
                        <div
                          className={`${snapshot.isDraggingOver ? "" : ""}`}
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <Draggable
                            draggableId={article.uuid}
                            index={index}
                            key={article.id}
                          >
                            {(provided /*snapshot*/) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                // className="flex gap-2 items-center mt-2 ml-3"
                              >
                                <div className="!ml-7">
                                     <EllipsisDoubleVertical>{article?.task}</EllipsisDoubleVertical>
                                </div>
                              </div>
                            )}
                          </Draggable>
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
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
  );
};
export default ProgressTable;
