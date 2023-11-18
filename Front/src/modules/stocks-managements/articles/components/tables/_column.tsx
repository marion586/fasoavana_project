import { Column } from "react-table";
import { CustomHeader } from "./CustomHeader";
import { ActionsCell } from "./ActionsCell";
import { CountryCell } from "./CountryCell";
import { ArtilceModelItem } from "../../core/models/article.model";
export const artilceColumns: ReadonlyArray<Column<ArtilceModelItem>> = [
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="Références"
      />
    ),
    id: "reference",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="DÉSIGNATION"
      />
    ),
    id: "designation",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="CATALOGUE"
      />
    ),
    id: "CATALOGUE",
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="FAMILLE"
      />
    ),
    id: "famille",
    Cell: ({ ...props }) => <CountryCell article={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="SOUS FAMILLE"
      />
    ),
    id: "sous-famille",
    Cell: ({ ...props }) => <CountryCell article={props.data[props.row.index]} />,
  },

  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="SUIVI STOCK"
      />
    ),
    id: "suiviStock",
    Cell: ({ ...props }) => <CountryCell article={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="PRIX D’ACHAT"
      />
    ),
    id: "prixAchat",
    Cell: ({ ...props }) => <CountryCell article={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-3"
        title="UNITÉ VENTE"
      />
    ),
    id: "prixAchat2",
    Cell: ({ ...props }) => <CountryCell article={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <CustomHeader
        tableProps={props}
        className="py-3 px-6"
        title="ACTIONS"
      />
    ),
    id: "actions",
    Cell: ({ ...props }) => (
      <ActionsCell article={props.data[props.row.index]} />
    ),
  },
];
