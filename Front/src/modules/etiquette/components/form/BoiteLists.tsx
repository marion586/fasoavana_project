import EtiqueteItem from "@/shared/components/EtiqueteItem";
import React, { useEffect, useState } from "react";
import { useResponseBoite } from "../../lib";
import Barcode from "react-barcode";
import MaterialService from "../../core/services/_requests";
import Loading from "@/shared/components/Loading";

const BoiteLists = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchEtiquest();
  }, []);

  const fetchEtiquest = async () => {
    try {
      setLoading(true);
      const response = await MaterialService.getAllEtiquettes();
      if (response) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // const boites = useResponseBoite();
  console.log(data);
  if (loading) return <Loading loading={loading} />;
  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.length ? (
        data?.map((d: any) => (
          <EtiqueteItem data={d}>
            <Barcode width={0.5} height={50} value={d._id} />;
          </EtiqueteItem>
        ))
      ) : (
        <h1>Data vite</h1>
      )}
    </div>
  );
};

export default BoiteLists;
