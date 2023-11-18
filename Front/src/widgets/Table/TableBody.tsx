/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { Column, Row, useTable } from 'react-table'
import { CustomRow } from './CustomRow'
type Props <D, C extends object> = {
    data: D[],
    columns: ReadonlyArray<Column<C>>
}
export const TableBody: React.FC<Props<any,any>> = ({columns,data}) => {
    const { getTableBodyProps, rows, prepareRow} = useTable({
        columns, data
    })  
  return (
    <tbody className='rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light' {...getTableBodyProps()}>
    {
        rows.map((row: Row<object>, i) => {
            prepareRow(row)
            return <CustomRow row={row} key={`row-${i}-${row.id}`} />
        })
     }
    </tbody>
  )
}
