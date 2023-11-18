/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SearchGloblal } from "../../components/form/SearchGloblal";
import { itemsNormal } from "../../data/data";
import ProgressTable from "../../components/table/progress/ProgressTable";
import OperatorProgress from "../../components/table/OperatorProgregress";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export const ProgessTab = () => {
  const [data, setData] = useState<any>(itemsNormal);
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    console.log("dest", destination);
    console.log("draggableId", draggableId);
    console.log("source", source);

    // Vérifie si l'élément a été déposé à un endroit valide
    if(destination?.droppableId =="mouvementTable" || source?.droppableId =="mouvementTable") {
      // en cours
      return
    }

    else if(destination?.droppableId =="mouvementTableChild" || source?.droppableId =="mouvementTableChild") {
      // en cours
      return
    }
    

    if (!destination) {
      return;
    }

    // Vérifie si l'élément a été déposé à un nouvel endroit
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

   /* if (
      destination.droppableId === source.droppableId 
    ) {
      return;
    }*/
    // Mettez à jour l'état de votre application en conséquence
    // en fonction de l'élément déplacé et de sa destination


    let data_permut 
    const operator1: any[] = data.operator1;
    const operator2: any[] = data.operator2;
     // Source Logic
    if(source.droppableId === "Operator1") {
      data_permut = data.operator1[source.index]
      //console.log("opt-row",data_permut);
      operator1.splice(source.index,1)
      
    }
    else {
      data_permut = data.operator2[source.index]
      console.log("opt-row",data_permut);
      operator2.splice(source.index,1) // Source Logic
    }

     // Destination Logic
     if (destination.droppableId === "Operator1") {
      operator1.splice(destination.index, 0, data_permut);
    } else {
      operator2.splice(destination.index, 0, data_permut);
    }
    setData({...data,operator1:operator1,operator2:operator2})
  };
  return (
    <div>
      <SearchGloblal />
      <DragDropContext onDragEnd={onDragEnd}>
        <ProgressTable progress={data} setProgress={setData} />
        <OperatorProgress progress={data} setProgress={setData} />
      </DragDropContext>
    </div>
  );
};
