/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {FC} from 'react'
import { ColumnInstance } from 'react-table'
import { CustomHeaderColumn } from './CustomHeaderColumn'


type Props<T extends object ={}> = {
    headers: ColumnInstance<T>[]
}
export const TableHeader:FC<Props<any>> = ({headers}) => {
  return (
    <thead>
        <tr className='bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]'>
        {headers.map((column: ColumnInstance<any>) => (
                        <CustomHeaderColumn key={column.id} column={column} />
                    ))}
        </tr>
    </thead>
  )
}
