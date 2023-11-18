import { FC } from "react";
import { RoleModelItem } from "../../core/models/roles.model";
import clsx from "clsx";

type Props = {
  role: RoleModelItem;
};

export const SupplyCell: FC<Props> = ({ role }) => {
  return (
    <div className="">
      <span
        className={clsx(
          "text-white !h-8  !w-12 flex justify-center items-center  rounded-md text-xs uppercase bg-[#6AD860]",
          {
            "bg-[#6AD860]": role?.supply,
            "bg-[#b02e2e]": !role?.supply,
          }
        )}
      >
        {role?.supply ? "Oui" : "non"}
      </span>
    </div>
  );
};
