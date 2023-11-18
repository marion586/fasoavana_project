import {FC,PropsWithChildren} from "react"
type Props = {
    className?: string
}
const TableWrapper:FC<Props & PropsWithChildren> = ({className="w-full table-fixed",children}) => {
  return (
    <table className={className}>
        {children}
    </table>
  )
}

export default TableWrapper