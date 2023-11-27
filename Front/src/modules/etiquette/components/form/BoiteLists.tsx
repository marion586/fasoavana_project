import EtiqueteItem from "@/shared/components/EtiqueteItem";
import React from "react";
import { useResponseBoite } from "../../lib";
import Barcode from "react-barcode";

const BoiteLists = () => {
  const boites = useResponseBoite();
  console.log(boites);
  return (
    <div className="grid grid-cols-4 gap-4">
      {boites.data?.length ? (
        boites?.data?.map((d: any) => (
          <EtiqueteItem data={d}>
            <Barcode width={0.9} height={50} value={d._id} />;
          </EtiqueteItem>
        ))
      ) : (
        <h1>Data vite</h1>
      )}
    </div>
  );
};

export default BoiteLists;
