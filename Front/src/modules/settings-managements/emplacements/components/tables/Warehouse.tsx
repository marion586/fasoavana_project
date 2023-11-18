import { FC } from "react";
import { EmplacementModelItem } from "../../core/models/emplacement.model";

type Props = {
    emplacement: EmplacementModelItem;
};

export const Warehouse: FC<Props> = ({ emplacement }) => {
  return (
    <div className="">
        {emplacement?.warehouse?.label}
    </div>
  );
};
