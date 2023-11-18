/* eslint-disable @typescript-eslint/no-explicit-any */
//import MenuItem from "./MenuItem";
import { RxCaretUp } from "react-icons/rx";
import { useState, PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

interface DropdownProps {
  text: string;
  icon: any;
  //children: any;
  isActive?: boolean;
  basePath: string;
}

export default function Dropdown({
  text,
  icon,
  children,
 // isActive,
  basePath,
}: DropdownProps & PropsWithChildren) {
  const [show, setShow] = useState<boolean>(false);
  const location = useLocation();
  const handleDropdown = () => {
    setShow((prev: boolean) => !prev);
  };
  
  return children ? (
    <li className="dropdown mb-[2px] transition-all">
      <span
        className={`nav-menu-item ${
          show || location.pathname.includes(basePath) ? "active" : ""
        }`}
        onClick={handleDropdown}
      >
        <span className="left flex items-center font-semibold z-[2] transition-all duration-300">
          <span className="w-[30px] pl-1 icon  duration-300">{icon}</span>
          <span className="text overflow-hidden ">{text}</span>
        </span>
        <RxCaretUp
          className={`caret text-xl z-[2] transition-all duration-300 ${
            show ? "rotate-180" : ""
          }`}
        />
      </span>
      <ul
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          show ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {children}
      </ul>
    </li>
  ) : (
   <Link to={basePath}  onClick={handleDropdown}>
        <li className="transition-all">
      <span
        className={`nav-menu-item ${
          location.pathname.includes(basePath) ? "active" : ""
        }`}
      >
        <span className="left flex items-center font-semibold z-[2] transition-all duration-300">
          <span className="w-[30px] pl-1 icon  duration-300">{icon}</span>
          <span className="text overflow-hidden ">{text}</span>
        </span>
      </span>
    </li>
   </Link>
  );
}
