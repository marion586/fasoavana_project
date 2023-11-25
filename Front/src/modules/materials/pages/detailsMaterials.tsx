import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaterialService from "../core/services/_requests";
import Loading from "@/shared/components/Loading";

const DetailsMaterials = () => {
  const [loading, setLoading] = useState(false);
  const [detailsData, setDetailsData] = useState<any>({});
  const { idMaterial } = useParams();

  const getMaterialById = async (id: any) => {
    setLoading(true);
    true;
    try {
      const mat = await MaterialService.getMaterialById(id);
      if (mat) {
        console.log(mat.data.data);

        setDetailsData(mat.data.data);
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
          Details du materiel nomée : {detailsData?.name}
        </h1>
      </div>
      <div className="mt-3 p-10 flex gap-12">
        <div className="" style={{ flexBasis: "40%" }}>
          <img src={detailsData.image} alt="" />
        </div>
        <div className="flex-basis-[50%]">
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Nom:
            </span>{" "}
            <span>{detailsData.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Description:
            </span>{" "}
            <p>{detailsData.description}</p>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Marque:
            </span>{" "}
            <span>{detailsData.marque}</span>
          </div>

          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Couleur:
            </span>{" "}
            <span>{detailsData.color}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Category:
            </span>{" "}
            <span>{detailsData.category}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Date de creation:
            </span>{" "}
            <span>{detailsData.created_at}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Status:
            </span>{" "}
            <span>{detailsData.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMaterials;
