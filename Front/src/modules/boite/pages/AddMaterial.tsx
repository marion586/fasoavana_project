import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MaterialForm } from "../components/form/materailForm";
import BoiteService from "../core/services/_requests";
import Loading from "@/shared/components/Loading";
import { useDispatch } from "react-redux";
import { setLoadingRequest } from "../core/reducers/bank.reducer";
import BackButton from "@/shared/components/backButton";

const AddMaterial = () => {
  const { idMaterial } = useParams();
  const [loading, setLoading] = useState(false);
  const [editMaterial, setEditMaterial] = useState<any | null>({
    reference: "",
    description: "",
    location: "",
  });

  const getBoiteById = async (id: any) => {
    setLoading(true);
    true;
    try {
      const mat = await BoiteService.getBoiteById(id);
      if (mat) {
        console.log(mat.data.data);
        const newEditData = {
          reference: mat.data.data.reference,
          description: mat.data.data.description,
          location: mat.data.data.location,
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
      getBoiteById(idMaterial);
    }
    console.log("idMaterial", idMaterial);
  }, []);

  if (loading) return <Loading loading={loading} />;
  return (
    <div className="bg-white py-3 px-4 w-[99%]">
      <div className="flex justify-start gap-[10%] items-center">
        <BackButton />
        <h1 className="text-[20px] font-[500] text-black">
          {" "}
          Liste des boites - {idMaterial ? <>Modifier</> : <>Nouveau</>}{" "}
        </h1>
      </div>
      <div className="mt-3">
        <MaterialForm initialFieldValue={editMaterial} />
      </div>
    </div>
  );
};

export default AddMaterial;
