import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
export default function UserPopover() {
  const dispatch = useDispatch();
  const onDisconnect = () => {
    dispatch({ type: "user/initState" });
    localStorage.removeItem("current_user");
  };
  return (
    <div className="bg-white shadow-2xl rounded-lg mt-4 w-[150px] right-0 border flex-row items-stretch">
      <Link
        to="/"
        className="w-full flex items-center gap-2 px-3 py-3 hover:bg-gray-100"
      >
        <BiUser />
        Profil
      </Link>
      <Link
        to="/auth"
        onClick={onDisconnect}
        className="w-full flex items-center gap-2 px-3 py-3 hover:bg-gray-100"
      >
        <CiLogout />
        Deconnexion
      </Link>
    </div>
  );
}
