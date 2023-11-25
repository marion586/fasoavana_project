import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MaterialForm } from "../components/form/materailForm";
import MaterialService from "../core/services/_requests";
import Loading from "@/shared/components/Loading";
import { useDispatch } from "react-redux";
import { setLoadingRequest } from "../core/reducers/bank.reducer";
const dataCat = [
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
];
const AddMaterial = () => {
  const { idMaterial } = useParams();
  const [loading, setLoading] = useState(false);
  const [editMaterial, setEditMaterial] = useState<any | null>({
    name: "",
    category: {
      value: "",
      label: "-- Sélectionner --",
    },
    description: "",
    marque: "",
    color: "",
    image: "",
  });

  const getMaterialById = async (id: any) => {
    setLoading(true);
    true;
    try {
      const mat = await MaterialService.getMaterialById(id);
      if (mat) {
        console.log(mat.data.data);
        const newEditData = {
          name: mat.data.data.name,
          category: dataCat.find((d) => d.value === mat.data.data.category),
          description: mat.data.data.description,
          marque: mat.data.data.marque,
          color: mat.data.data.color,
          image: "",
        };
        console.log("newData", newEditData);
        setEditMaterial(newEditData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idMaterial) {
      getMaterialById(idMaterial);
    }
    console.log("idMaterial", idMaterial);
  }, []);

  if (loading) return <Loading loading={loading} />;
  return (
    <div className="bg-white py-3 px-4 w-[99%]">
      <div>
        <h1 className="text-[20px] font-[500] text-black">
          {" "}
          Liste des materiels - {idMaterial ? <>Modifier</> : <>Nouveau</>}{" "}
        </h1>
      </div>
      <div className="mt-3">
        <MaterialForm initialFieldValue={editMaterial} categoryData={dataCat} />
      </div>
    </div>
  );
};

export default AddMaterial;
