import { LvCard } from "@/shared/components/LvCard"
import LvHearder from "@/shared/components/LvHeader"
import { SearchGlobal } from "../components/form/SearchGlobal"
import { Pagination } from "../components/pagination"
import { Table } from "../components/table"
import { AppDispatch } from "@/apps/store"
import { useDispatch } from "react-redux"
import { useRequest } from "../lib"
import { fetchWarehouses } from "../core/actions"
import { useEffect } from "react"


export const List = () => {
  const dispatch:AppDispatch = useDispatch()
  const request = useRequest()
  useEffect(() => {
    dispatch(fetchWarehouses(request));
  }, [dispatch, request]);
  return (
    <LvCard>
       <LvHearder title="Entrepots" to="create" />
       <SearchGlobal />
       <Table />
       <Pagination />
    </LvCard>
  )
}

