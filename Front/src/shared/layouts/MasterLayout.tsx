import { Outlet } from "react-router-dom";
//import Navbar from '../components/navbar'
//import AsideBar from "../components/AsideBar";
import Navbar from "./menu-layouts/NavBar";
import { useState } from "react";
import AsideBar from "./menu-layouts/AsideBar";

const MasterLayout = () => {
  const [expandSidebar, setExpandSideBar] = useState<boolean>(false);
  return (
    <>
      <div className="border">
        <Navbar
          expandSidebar={expandSidebar}
          setExpandSideBar={setExpandSideBar}
        />
        <AsideBar expandSidebar={expandSidebar} />
        {/*<main id="content" role="main" className="main kl-bg-white ml-8">
        <main id="content" role="main" className="main bg-gray-100 ml-8">*/}
         <main id="content" role="main" className={` mt-[90px] min-h-screen transition-all duration-300 ${expandSidebar ? "ml-[120px]" : "ml-[260px]"}`}>
          {/* <div className="xs:ml-10 sm:ml-10 md:ml-60 lg:ml-0 xl:ml-0"></div>*/}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MasterLayout;
