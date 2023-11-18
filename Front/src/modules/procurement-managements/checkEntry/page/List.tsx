import LvHearder from "@/shared/components/LvHeader"
import { SearchGloblal } from "../components/form/SearchGlobal";
import { LvCard } from "@/shared/components/LvCard";
import { Table } from "../components/table/list";
import { Pagination } from "../components/pagination";
const List = () => {
  
  return (
    <LvCard>
      <LvHearder title="Check - Entrées" to="create" showBtn={false} />
      <SearchGloblal />
      <Table />
      <Pagination/>
    </LvCard>
  )
};

export default List;
