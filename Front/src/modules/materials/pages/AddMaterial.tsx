import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MaterialForm } from "../components/form/materailForm";
const AddMaterial = () => {
  const { idMaterial } = useParams();
  const [editMaterial, setEditMaterial] = useState<any | null>({
    name: "",
    category: [
      {
        value: "",
        label: "-- Sélectionner --",
      },
      {
        value: "portable",
        label: "Ordi Portable",
      },
      {
        value: "bureau",
        label: "Ordi Bureau",
      },
      {
        value: "mobile",
        label: "Appareil Mobile",
      },
      {
        value: "other",
        label: "Autre materiel",
      },
    ],
    description: "",
    marque: "",
    color: "",
    image: "",
  });

  return (
    <div className="bg-white py-3 px-4 w-[99%]">
      <div>
        <h1 className="text-[20px] font-[500] text-black">
          {" "}
          Liste des materiels - {idMaterial ? <>Modifier</> : <>Nouveau</>}{" "}
        </h1>
      </div>
      <div className="mt-3">
        <MaterialForm initialFieldValue={editMaterial} />
      </div>
    </div>
  );
};

export default AddMaterial;
