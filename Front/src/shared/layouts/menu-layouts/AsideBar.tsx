import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { BsPersonGear } from "react-icons/bs";
import { toAbsoluteUrl } from "@/shared/libs/AssetHelpers";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiFileShredLine } from "react-icons/ri";

type Props = {
  expandSidebar: boolean;
};

const AsideBar = ({ expandSidebar }: Props) => {
  return (
    <aside
      className={
        "w-[240px] bg-white h-screen fixed top-0 z-50 shadow-xl transition-all duration-300 sidebar flex-col " +
        (expandSidebar ? "w-[80px] collapsed-sidebar" : "overflow-y-auto")
      }
    >
      <div className="top h-30 flex items-center justify-center h-[130px]">
        <Link to="/">
          <img
            src={toAbsoluteUrl("dashboard/img/logo/Spider.png")}
            alt="Logo spider"
            className="w-[150px]"
          />
        </Link>
      </div>
      <ul className={"menu pr-7"}>
        <MenuItem to="/materials">
          <RiFileShredLine />
          Liste des materiels
        </MenuItem>
        <MenuItem to="/materials">
          <RiFileShredLine />
          Liste des materiels
        </MenuItem>

        {/* <Dropdown basePath="client/" icon={<BiUser />} text="Besoin">
          <MenuItem to="/client/1">Liste des clients</MenuItem>
          <MenuItem to="/client/2">Besoins</MenuItem>
        </Dropdown>

        <Dropdown
          basePath="procurement/"
          icon={<FaFileInvoiceDollar />}
          text="Approvisionnement"
        >
          <MenuItem to="/procurement/providers">
            Liste des fournisseurs
          </MenuItem>
          <MenuItem to="/procurement/2">Commandes à passer</MenuItem>
          <MenuItem to="/procurement/purchage-order">
            Bons de commandes
          </MenuItem>
          <MenuItem to="/procurement/3">Dossier import</MenuItem>
        </Dropdown> */}
        {/*<Dropdown basePath="alerts/" icon={<HiOutlineBellAlert className={clsx('rotate-45',{"ml-3":expandSidebar})} />} text={expandSidebar ? "": "Alert"} />*/}
        {/* <Dropdown
          basePath="/stocks-management/"
          icon={<BsPersonGear />}
          text={expandSidebar ? "" : "Exploitation stock"}
        >
          <MenuItem to="/stocks-management/articles">Articles</MenuItem>
          <MenuItem to="/stocks-management/movement">Mouvements</MenuItem>
        </Dropdown>
        <Dropdown
          basePath="/logistics-management/"
          icon={<RiFileShredLine />}
          text={expandSidebar ? "" : "Logistique"}
        >
          <MenuItem to="/logistics-management/movement">Mouvements</MenuItem>
          <MenuItem to="/movement-management/livraison">
            Bons de livraison
          </MenuItem>
        </Dropdown> */}
      </ul>
    </aside>
  );
};

export default AsideBar;
