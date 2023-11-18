import { FC, PropsWithChildren } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";

const EllipsisDoubleVertical: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex items-center">
      <HiEllipsisVertical className="w-5 h-5 mr-0" />
      <HiEllipsisVertical className="w-5 h-5 -ml-3" />
      <div className="basis-[80%]">{children}</div>
    </div>
  );
};

export default EllipsisDoubleVertical;
