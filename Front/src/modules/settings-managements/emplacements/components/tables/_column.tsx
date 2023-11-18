import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { EmplacementModelItem } from "../../core/models/emplacement.model";
import { Warehouse } from "./Warehouse";
export const emplacementColumns: ReadonlyArray<Column<EmplacementModelItem>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-start"
        title="ENTREPÔT"
      />
    ),
    accessor: "warehouse",
    Cell: ({ ...props }) => (
      <Warehouse emplacement={props.data[props.row.index]} />
    ),
  },
 {
   Header: (props) => (
     <CustomHeader
       tableProps={props}
       className="py-3 px-6 !uppercase text-start"
       title="CODE EMPLACEMENT"
     />
   ),
   accessor: "locationCode",
 },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 w-[20%]"
        title="ACTIONS"
      />
    ),
    id: "actions",
    Cell: ({ ...props }) => (
      <ActionsCell emplacement={props.data[props.row.index]} />
    ),
  },
];
