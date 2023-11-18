/* eslint-disable react-hooks/exhaustive-deps */
import { LvCard } from "@/shared/components/LvCard"
import LvHearder from "@/shared/components/LvHeader"
import { SearchGlobal } from "../components/form/SearchGlobal"
import { Pagination } from "../components/pagination"
import { Table } from "../components/table"
import { AppDispatch } from "@/apps/store"
import { useRequest } from "../lib"
import {useEffect} from "react"
import { fetchConditions } from "../core/actions"
import { useDispatch } from "react-redux"


const List = () => {
  const dispatch:AppDispatch = useDispatch()
  const request = useRequest()
  useEffect(() => {
    dispatch(fetchConditions(request));
  }, [dispatch, request]);
  return (
    <LvCard>
       <LvHearder title="Conditionnements" to="create" />
       <SearchGlobal />
       <Table />
       <Pagination />
    </LvCard>
  )
}

export default List