/* eslint-disable @typescript-eslint/ban-types */

import { Draggable, Droppable } from "react-beautiful-dnd";
import { BiSortAlt2 } from "react-icons/bi";
import { HiEllipsisVertical } from "react-icons/hi2";

/* eslint-disable @typescript-eslint/no-explicit-any */
const OperatorProgress = ({
  progress,
  setProgress,
}: {
  progress: any;
  setProgress: Function;
}) => {
  console.log(progress ? "":setProgress);
  
  return (
    <div className="mt-4">
      <div className="flex justify-between bg-[#F8FAFD] border-t-[#E7EAF3] border">
        <div className="basis-[50%] text-center border-r mr-1 py-3">
          Operateur 1
          <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
        </div>
        <div className="basis-[50%] text-center py-3">
          Operateur 2
          <BiSortAlt2 className="ml-[3px] inline w-5 h-5 hover:cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between">
        <Droppable droppableId="Operator1">
          {(provided, snapshot) => (
            <div
              className={`basis-[50%] border-r mr-1 ${
                snapshot.isDraggingOver ? "bg-slate-200 h-32" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {progress?.operator1?.map((op: any, index: number) => {
                return (
                  <Draggable draggableId={op.uuid} index={index} key={op.id}>
                    {(provided /*snapshot*/) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex gap-2 items-center mt-2 ml-3"
                      >
                        <div className="flex">
                          <HiEllipsisVertical /> 
                          <HiEllipsisVertical className="-ml-2" />
                        </div> {op.title}
                      </div>
                    )}
                  </Draggable>
                );
              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="Operator2">
          {(provided, snapshot) => (
            <div
              className={`basis-[50%] ${
                snapshot.isDraggingOver ? "bg-slate-200 h-32" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {progress?.operator2?.map((op: any, index: number) => {
                return (
                  <Draggable draggableId={op.uuid} index={index} key={op.id}>
                    {(provided /*snapshot*/) => (
                      <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex gap-2 items-center mt-2"
                    >
                      <div className="flex">
                        <HiEllipsisVertical size={15}/> 
                        <HiEllipsisVertical size={15} className="-ml-2" />
                      </div> {op.title}
                    </div>
                    )}
                  </Draggable>
                );
              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default OperatorProgress;
