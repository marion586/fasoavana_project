import {useMemo} from "react"
import {useResponseData } from "../../lib";
import { emplacementColumns } from "./_column";
import { useTable } from "react-table";
import TableWrapper from "@/widgets/Table/TableWrapper";
import { TableHeader } from "@/widgets/Table/TableHeader";
import { TableBody } from "@/widgets/Table/TableBody";

export const Table = () => {
  const emplacementList =   useResponseData()
  const data = useMemo(() => emplacementList, [emplacementList])
  const columns = useMemo(() => emplacementColumns, [])
  const {headers} = useTable({
      columns, data,
  })
  return (
    <TableWrapper>
    <TableHeader headers={headers} />
    <TableBody columns={columns} data={data} />
  </TableWrapper>
  );
};
