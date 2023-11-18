import { LvCard } from "@/shared/components/LvCard"
import LvHearder from "@/shared/components/LvHeader"
import { SearchGloblal } from "../components/form/SearchGlobal"
import { Pagination } from "../components/pagination"
import { Table } from "../components/table"


const List = () => {
  return (
    <LvCard>
       <LvHearder title="Devises" to="create" />
       <SearchGloblal />
       <Table />
       <Pagination />
    </LvCard>
  )
}

export default List