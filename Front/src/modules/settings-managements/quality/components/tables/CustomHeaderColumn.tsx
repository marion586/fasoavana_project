import {ColumnInstance} from "react-table";
import {FC} from "react";
import { QualityModel } from "../../core/models/quality_model";

type Props = {
    column: ColumnInstance<QualityModel>
}

const CustomHeaderColumn: FC<Props> = ({column}) => (
    <>
        {column.Header && typeof column.Header === 'string' ? (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ) : (
            column.render('Header')
        )}
    </>
)

export {CustomHeaderColumn}
