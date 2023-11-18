import { LvCard } from "@/shared/components/LvCard"
import LvHearder from "@/shared/components/LvHeader"
import { SearchGloblal } from "../components/form/SearchGloblal"
import { Table } from "../components/tables"
import { Pagination } from "../components/pagination"

const List = () => {
  return (
    <LvCard>
      <LvHearder title="" to="create" />
      <div className="flex justify-between mb-4">
        <div className="flex sm:flex-col md:flex-row lg:flex-row gap-6 mt-4">
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"N° Bon de réception".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"Date".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"Nom fournisseur".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"Incoterm".toUpperCase()}
          />
        </div>
        <div className="flex justify-end">
              <SearchGloblal />
        </div>
      </div>
      <Table />
      <Pagination />
    </LvCard>
  )
}

export default List