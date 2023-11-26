import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader";
import React from "react";
import { SearchGloblal } from "../components/form/SearchGlobal";
import BoiteLists from "../components/form/BoiteLists";
const Bottle = () => {
  return (
    <LvCard>
      <LvHearder title="Boites de materiels" to="create" />
      <SearchGloblal
        handleSearch={(e) => {
          console.log(e);
        }}
      />
      <BoiteLists />
    </LvCard>
  );
};

export default Bottle;
