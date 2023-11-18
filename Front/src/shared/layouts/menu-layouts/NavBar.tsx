/* eslint-disable @typescript-eslint/ban-types */
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { TbArrowBarLeft } from "react-icons/tb";
import userAvatar from "../../assets/image/user.jpg";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import NotificationPopover from "./NotificationPopover";
import UserPopover from "./UserPopover";

type Props = {
  setExpandSideBar: Function;
  expandSidebar: boolean;
};

const Navbar = ({ setExpandSideBar, expandSidebar }: Props) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [isUserPopoverOpen, setIsUserPopoverOpen] = useState<boolean>(false);
  const handleExpand = () => {
    setExpandSideBar((prev: boolean) => !prev);
  };

  const handleNotificationPopover = () => {
    setIsNotificationOpen((prev: boolean) => !prev);
  };
  const handleUserPopover = () => {
    setIsUserPopoverOpen((prev: boolean) => !prev);
  };

  return (
    <div
      className={`h-14 fixed top-0 w-full bg-gray-50 z-40 transition-all duration-300 ${
        expandSidebar ? "pl-[80px]" : "pl-[240px]"
      }`}
    >
      <div className="inner flex items-center h-full px-7 py-2">
        <button className="nav-button-red" onClick={handleExpand}>
          <TbArrowBarLeft
            className={`duration-300 ${expandSidebar ? "rotate-180" : ""}`}
          />
        </button>
        <div className="searchbar flex items-center h-full w-full max-w-[500px] ml-10">
          <BiSearch className="text-xl mr-3" />
          <input
            type="text"
            name="search"
            placeholder="Recherche"
            className="bg-transparent w-full h-full px-3 rounded-full hover:bg-white transition-all"
          />
        </div>
        <div className="right flex gap-7 items-center mr-0 ml-auto">
          <Popover
            isOpen={isNotificationOpen}
            positions={["bottom"]}
            onClickOutside={() => setIsNotificationOpen(false)}
            content={<NotificationPopover />}
          >
            <button
              className="nav-button-red"
              onClick={handleNotificationPopover}
            >
              <BsBell />
            </button>
          </Popover>
          <Popover
            isOpen={isUserPopoverOpen}
            positions={['bottom']}
            onClickOutside={() => setIsUserPopoverOpen(false)}
            content={<UserPopover/>}
          >
            <a className={"user flex items-center gap-3 text-sm cursor-pointer hover:bg-gray-200 rounded-full pl-3 "+(isUserPopoverOpen ? "bg-gray-200" : "")} onClick={handleUserPopover}>
              <span className="text-[#0E3B62] font-semibold">Delano Rosvelte Patt</span>
              <img
                src={userAvatar}
                alt="user avatar"
                className="w-10 rounded-full"
              />
            </a>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;