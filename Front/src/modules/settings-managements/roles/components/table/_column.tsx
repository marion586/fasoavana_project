import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { SupplyCell } from "./SupplyCell";
import { RoleModelItem } from "../../core/models/roles.model";
export const roleColumns: ReadonlyArray<Column<RoleModelItem>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="LIBELLÉ"
      />
    ),
    accessor: "name",
  },
 {
   Header: (props) => (
     <CustomHeader
       tableProps={props}
       className="py-3 px-6 text-left"
       title="CODE SWIFT"
     />
   ),
   accessor: "supply",
   Cell: ({ ...props }) => (
      <SupplyCell role={props.data[props.row.index]} />
    ),
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
      <ActionsCell role={props.data[props.row.index]} />
    ),
  },
];
