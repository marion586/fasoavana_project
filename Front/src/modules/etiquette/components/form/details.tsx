import LvHearder from "@/shared/components/LvHeader";
import React from "react";
type Iprops = {
  boites: any;
  materials: any;
};
const details = ({ boites, materials }: Iprops) => {
  return (
    <div>
      <LvHearder showBtn={false} title="Details des etiquettes" to="create" />
      <div>
        <h1>{boites.reference}</h1>
      </div>
    </div>
  );
};

export default details;
