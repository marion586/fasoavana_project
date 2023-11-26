import BoiteItem from "@/shared/components/BoiteItem";
import React from "react";
import { useResponseBoite } from "../../lib";

const BoiteLists = () => {
  const boites = useResponseBoite();
  console.log(boites);
  return (
    <div className="grid grid-cols-4 gap-4">
      {boites.data?.length ? (
        boites?.data?.map((d: any) => <BoiteItem data={d} />)
      ) : (
        <h1>Data vite</h1>
      )}
    </div>
  );
};

export default BoiteLists;
