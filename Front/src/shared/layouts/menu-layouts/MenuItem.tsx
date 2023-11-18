import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
type MenuItemProps = {
  to: string;
  isActive?: boolean;
};
const MenuItem: FC<PropsWithChildren & MenuItemProps> = ({ children, to }) => {
  const location = useLocation();
  // console.log(isActive);
  return (
    <Link to={to}>
      <li
        className={clsx("nav-menu-item mt-[2px]", {
          active: location.pathname.includes(to),
        })}
      >
        <span className="h-full flex justify-between items-center pl-[30px] z-[2]">
          {children}
        </span>
      </li>
    </Link>
  );
};
//`  ${isActive ? "active" : ""}`
export default MenuItem;
