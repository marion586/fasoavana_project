import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader";
import React, { useEffect } from "react";
import { SearchGloblal } from "../components/form/SearchGlobal";
import BoiteLists from "../components/form/BoiteLists";
import { fetchBoites } from "../core/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/apps/store";

const Bottle = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoites());
  }, []);
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
