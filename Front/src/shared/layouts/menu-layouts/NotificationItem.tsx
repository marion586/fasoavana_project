
import userAvatar from "../../assets/image/user.jpg";

export default function NotificationItem(){
    return (
        <div className="flex items-start gap-3 cursor-pointer even:border-t even:border-b border-gray-100 pt-3 pb-5 px-3 hover:bg-gray-50 transition-all">
            <div className="circle bg-gray-200 rounded-full w-3 h-3 flex-shrink-0 mt-3"></div>
            <img
              src={userAvatar}
              alt="user avatar"
              className="w-10 rounded-full"
            />
            <div className="text text-sm w-full">
                <strong>Anne Richard</strong>
                <p>
                    Lorem ipsum dolor sit amet sit consectetur, adipisicing elit
                </p>
            </div>
            <div className="date ml-auto mr-0 text-xs text-gray-300">
                1DY
            </div>
        </div>
    )
}