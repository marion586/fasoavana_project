/* eslint-disable @typescript-eslint/no-unused-vars */
import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader";
import { SearchGloblal } from "../components/form/SearchGloblal";
import { Pagination } from "../components/pagination";
import { Table } from "../components/tables";
import { useParams } from "react-router-dom";

const List = () => {
  const {idArcticle} = useParams()
  return (
    <LvCard>
      <LvHearder title={idArcticle ? `Liste fournisseurs associe à article numero ${idArcticle}` :"Liste fournisseurs"} to="list" />
      <div className="flex justify-between mb-4">
        <div className="flex sm:flex-col md:flex-row lg:flex-row gap-6 mt-4">
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"Référence fourniss..".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"type fournisseur".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"type".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"intitulé fournisseur".toUpperCase()}
          />
        </div>
        <div className="flex justify-end">
              <SearchGloblal />
        </div>
      </div>
      <Table />
      <Pagination />
    </LvCard>
  );
};

export default List;
