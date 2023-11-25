import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { FC, PropsWithChildren, useState } from "react";
type MenuItemProps = {
  to: string;
};
const MenuItem: FC<PropsWithChildren & MenuItemProps> = ({ children, to }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState("material");
  // console.log(isActive);
  return (
    <Link
      to={to}
      onClick={() => setIsActive(to)}
      className="bg-white"
      style={{ backgroundColor: "black !important" }}
    >
      <li
        className={`${
          isActive === to ? "nav-menu-item mt-[2px]" : "nav-menu-item-inactive"
        }`}
      >
        <span className="h-full flex justify-between gap-2 items-center pl-[30px] z-[2]">
          {children}
        </span>
      </li>
    </Link>
  );
};
//`  ${isActive ? "active" : ""}`
export default MenuItem;
