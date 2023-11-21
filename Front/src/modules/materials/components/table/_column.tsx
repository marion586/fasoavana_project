import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { BankModel } from "../../core/models/bank.model";
import { CountryCell } from "./CountryCell";
export const bankColumns: ReadonlyArray<Column<BankModel>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="BANQUE"
      />
    ),
    accessor: "entitled",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6 text-left"
        title="ABRÉVIATION"
      />
    ),
    accessor: "abbreviation",
  },
  {
   Header: (props) => (
     <CustomHeader
       tableProps={props}
       className="py-3 px-6 text-left"
       title="TÉLÉPHONE"
     />
   ),
   accessor: "phone",
 },
 {
   Header: (props) => (
     <CustomHeader
       tableProps={props}
       className="py-3 px-6 text-left"
       title="CODE SWIFT"
     />
   ),
   accessor: "country",
   Cell: ({ ...props }) => (
      <CountryCell bank={props.data[props.row.index]} />
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
      <ActionsCell bank={props.data[props.row.index]} />
    ),
  },
];
