import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { WarehouseModel } from "../../core/models/warehouse.model";
export const bankColumns: ReadonlyArray<Column<WarehouseModel>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="LIBELLÉ"
      />
    ),
    accessor: "label",
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
      <ActionsCell warehouse={props.data[props.row.index]} />
    ),
  },
];
