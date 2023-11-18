/* eslint-disable react-hooks/exhaustive-deps */
import {useMemo} from "react"

import { bankColumns } from "./_column";
import { useTable } from "react-table";
import TableWrapper from "@/widgets/Table/TableWrapper";
import { TableHeader } from "@/widgets/Table/TableHeader";
import { TableBody } from "@/widgets/Table/TableBody";
import { useLoading, useResponseData } from "../../lib";
import { ConditionModel } from "../../core/models/condition.model";
import Loading from "@/shared/components/Loading";

export const Table = () => {
  const  conditionData:ConditionModel[] = useResponseData()
  const isLoading =useLoading()
  const data = useMemo(() => conditionData, [conditionData])
  const columns = useMemo(() => bankColumns, [])
  const {headers} = useTable({
      columns, data,
  })
  
  return (
     <TableWrapper>
       <TableHeader headers={headers} />
       <TableBody columns={columns} data={data} />
       <Loading loading={isLoading} />
     </TableWrapper>
  )
};