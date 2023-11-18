import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'


/**
 * @deprecated 
 * @author Onjaniaina
 */

type Props<T extends object> = {
    row: Row<T>
}

const CustomRow: FC<Props<object>> = ({row}) => (
    <tr className='border-b border-gray-200 bg-white hover:bg-gray-100' {...row.getRowProps()}>
        {row.cells.map((cell) => {
            return (
                <td
                    {...cell.getCellProps()}
                    className={clsx("py-3 px-6",{'text-end min-w-100px': cell.column.id === 'actions', "text-[17px]":cell.column.id !== 'actions'})}
                >
                    {cell.render('Cell')}
                </td>
            )
        })}
    </tr>
)

export {CustomRow}
