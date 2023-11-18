import { Column } from "react-table";
import { QualityModel } from "../../core/models/quality_model";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
export const qualityColumns: ReadonlyArray<Column<QualityModel>> = [
   {
    Header:  (props) => <CustomHeader tableProps={props} className="py-3 px-6 text-left" title="LIBELLÉ" />,
    accessor:"label"
   },
   {
      Header:  (props) => <CustomHeader tableProps={props} className="py-3 px-6 w-[20%]" title="ACTIONS" />,
      id:"actions",
      Cell:({...props}) =><ActionsCell quality={props.data[props.row.index]} />
   }
]