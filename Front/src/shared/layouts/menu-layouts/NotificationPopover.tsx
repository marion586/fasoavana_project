import { Link } from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";
import NotificationItem from "./NotificationItem";

export default function NotificationPopover() {
    return (
        <div className="bg-white shadow-2xl rounded-lg mt-4 w-[400px] h-[455px] right-0 border flex-row items-stretch z-50 ">
            <div className="header flex items-center px-5 h-[48px] border-b"><strong>Notifications</strong></div>
            <div className="h-[347px] overflow-y-auto">
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
            </div>
            <div className="footer border-t h-[60px] ">
                <Link to="/" className="h-full flex justify-center items-center text-blue-400 gap-3">
                    View all notifications 
                    <BsChevronRight/>
                </Link>
            </div>
        </div>
    )
}