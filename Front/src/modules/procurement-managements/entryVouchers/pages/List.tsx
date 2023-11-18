/* eslint-disable @typescript-eslint/no-unused-vars */
import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader";
import { SearchGlobal } from "../components/form/SearchGlobal";
import { Pagination } from "../components/pagination";
import { Table } from "../components/tables/list";


const List = () => {
 
  return (
    <LvCard>
      <LvHearder title={"Bons d'entrées"} to="list" showBtn={false} />
      <div className="flex justify-between mb-4">
        <div className="flex sm:flex-col md:flex-row lg:flex-row gap-6 mt-4">
          <input
            className="lv-input-custom md:h-[38px] md:w-[200px] text-[#677788]"
            placeholder={"N° bon d'entrée".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[200px] text-[#677788]"
            placeholder={"date".toUpperCase()}
            type="date"
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[200px] text-[#677788]"
            placeholder={"nom fournisseur".toUpperCase()}
          />
        
        </div>
        <div className="flex justify-end">
              <SearchGlobal />
        </div>
      </div>
      <Table />
      <Pagination />
    </LvCard>
  );
};

export default List;
