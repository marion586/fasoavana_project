import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader"
import { SearchGloblal } from "../components/form/SearchGlobal";
import { Table } from "../components/table/details"
import { Pagination } from "../components/pagination";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const  navigate = useNavigate()
  return (
    <LvCard>
      <LvHearder title="Check - Entrées" to="create" showBtn={false}>
        <button
          type="button"
          onClick={() =>navigate(-1)}
          className="py-2 px-4 h-[46px] w-[180px] text-red-600  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
           Retour à la liste
        </button>
      </LvHearder>
      <SearchGloblal />
      <Table />
      <Pagination/>
    </LvCard>
       
  )

};

export default Details;
