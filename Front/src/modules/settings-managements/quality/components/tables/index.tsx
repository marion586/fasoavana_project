import { FC, useMemo } from "react";
import { useResponseDataQuality } from "../../lib";
import { qualityColumns } from "./_column";
import { useTable } from "react-table";
import TableWrapper from "@/widgets/Table/TableWrapper";
import { TableHeader } from "@/widgets/Table/TableHeader";
import { TableBody } from "@/widgets/Table/TableBody";

export const Table: FC = () => {
    const  qualitiesData = useResponseDataQuality()
    const data = useMemo(() => qualitiesData, [qualitiesData])
    const columns = useMemo(() => qualityColumns, [])
    const {headers} = useTable({
        columns, data
    })
    return (
       <TableWrapper>
            <TableHeader headers={headers} />
            <TableBody columns={columns} data={data} />
       </TableWrapper>
    )
}