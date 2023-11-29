import React, { useEffect, useState } from "react";
import DetailsForm from "../components/form/details";
import MaterialService from "../core/services/_requests";
import { useParams } from "react-router";
import Loading from "@/shared/components/Loading";
const Details = () => {
  const [data, setData] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idBoite } = useParams();
  const getAlldata = async () => {
    try {
      const response = await MaterialService.getBoiteById(idBoite);
      console.log(response.data.data);
      const dMaterial = await MaterialService.getAllMaterialById(idBoite);
      console.log(dMaterial.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAlldata();
  }, []);

  if (loading) return <Loading loading={loading} />;

  return (
    <div>
      <DetailsForm boites={data} materials={materials} />
    </div>
  );
};

export default Details;
