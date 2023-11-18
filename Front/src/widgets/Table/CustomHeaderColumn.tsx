import {ColumnInstance} from "react-table";
import {FC} from "react";


type Props<T extends object> = {
    column: ColumnInstance<T>
}

const CustomHeaderColumn: FC<Props<object>> = ({column}) => (
    <>
        {column.Header && typeof column.Header === 'string' ? (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ) : (
            column.render('Header')
        )}
    </>
)

export {CustomHeaderColumn}
