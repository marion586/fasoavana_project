import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { ConditionModel } from "../../core/models/condition.model";
export const bankColumns: ReadonlyArray<Column<ConditionModel>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="LIBELÉ"
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
      <ActionsCell condition={props.data[props.row.index]} />
    ),
  },
];
