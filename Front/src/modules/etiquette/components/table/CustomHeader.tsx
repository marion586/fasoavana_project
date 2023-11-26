import { PropsWithChildren, FC, useMemo } from "react";
import { HeaderProps } from "react-table";
import { useRequest } from "../../lib";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { AppDispatch } from "@/apps/store";
import clsx from "clsx";
import { BiSortAlt2 } from "react-icons/bi";
import { BankModel } from "../../core/models/bank.model";
import { setBankRequest, setBankResetRequest } from "../../core/reducers/bank.reducer";

type Props = {
  className?: string;
  title?: string;
  tableProps: PropsWithChildren<HeaderProps<BankModel>>;
};
export const CustomHeader: FC<Props> = ({ tableProps, className, title }) => {
  const request = useRequest();
  const dispatch: AppDispatch = useAppDispatch();
  const id = tableProps.column.id;

  const isSelectedForSorting = useMemo(() => {
    return request.sort && request.sort === id;
  }, [request, id]);
  const order: "ASC" | "DESC" | undefined = useMemo(
    () => request["order[id]"],
    [request]
  );

  const sortColumn = () => {
    // avoid sorting for these columns
    if (id === "actions" || id === "selection") {
      return;
    }

    if (!isSelectedForSorting) {
      // enable Sort asc
      dispatch(
        setBankRequest({ ...request, page: 1, sort: id, "order[id]": "ASC" })
      );
      return;
    }

    if (isSelectedForSorting && order !== undefined) {
      if (order === "ASC") {
        // enable sort desc
        dispatch(
          setBankRequest({ ...request, page: 1, sort: id, "order[id]": "DESC" })
        );
        return;
      }

      // disable Sort
      dispatch(setBankResetRequest());
    }
  };

  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(
        className,
        "text-[#677788]" //isSelectedForSorting && Order !== undefined && `table-sort-${Order}`
      )}
      style={{ cursor: "pointer" }}
      onClick={sortColumn}
    >
      {id === "selection" ? (
        <label style={{ display: "flex", gap: 10 }} className="">
          <input
            className=""
            type="checkbox"
          />
          <span>{title}</span>
        </label>
      ) : (
        <>
          <span className="text-[10px] font-sans">{title}</span>
         {(id !== "actions" ) && (
          <BiSortAlt2
            onClick={sortColumn}
            className="ml-3 inline w-5 h-5 hover:cursor-pointer"
          />
         )} 
        </>
      )}
    </th>
  );
};
