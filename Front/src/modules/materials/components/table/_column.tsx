import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { BankModel } from "../../core/models/bank.model";
import { CountryCell } from "./CountryCell";
export const bankColumns: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="Nom"
      />
    ),
    accessor: "name",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="Categories"
      />
    ),
    accessor: "category",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="Marque"
      />
    ),
    accessor: "marque",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="COULEUR"
      />
    ),
    accessor: "color",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="STATUS"
      />
    ),
    accessor: "status",
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
    Cell: ({ ...props }) => <ActionsCell bank={props.data[props.row.index]} />,
  },
];
