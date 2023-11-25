/* eslint-disable react-hooks/exhaustive-deps */
import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader";
import { SearchGloblal } from "../components/form/SearchGlobal";
import { Pagination } from "../components/pagination";
import { Table } from "../components/table";
import { AppDispatch } from "@/apps/store";
import { useRequest } from "../lib";
import { useEffect } from "react";
import { fetchMaterials } from "../core/actions";
//import { setBankReset } from "../core/reducers/bank.reducer"
import { useDispatch } from "react-redux";

const List = () => {
  const dispatch: AppDispatch = useDispatch();
  const request = useRequest();
  useEffect(() => {
    dispatch(fetchMaterials());
  }, [dispatch, request]);
  return (
    <LvCard>
      <LvHearder title="Materiels" to="create" />
      <SearchGloblal />
      <Table />
      <Pagination />
    </LvCard>
  );
};

export default List;
