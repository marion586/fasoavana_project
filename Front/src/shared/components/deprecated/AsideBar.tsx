import { Link, useLocation } from "react-router-dom";
import { useState } from "react"
import clsx from "clsx";
import LogoSideBar from "./LogoSideBar";
import {BsPersonGear} from 'react-icons/bs'
const AsideBar = () => {
    const [activeSetting, setActiveSetting] = useState<{parent:boolean,child: boolean}>({child:false,parent:false})
    const [activeClient, setActiveClient] = useState<{parent:boolean,child: boolean}>({child:false,parent:false})
    const location = useLocation()
   
    return (
        <aside className=" shadow-2xl js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-dark bg-dark navbar-vertical-aside-initialized">
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">
                    <LogoSideBar />
                    {/*Content*/}
                    <div className="navbar-vertical-content">
                        <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                            <div className="nav-item"

                            >
                                <div>
                                    <Link 
                                        className={clsx("nav-link flex justify-between items-center", {"active": location.pathname.includes("setting/")})}  
                                        to="setting/" 
                                        onClick={() => { 
                                            setActiveSetting({...activeSetting,parent:!activeSetting.parent})
                                            setActiveClient({child: false, parent:false})
                                        }}
                                    >
                                        <div>
                                            <i className="bi bi-gear nav-icon"></i>
                                            <span className="nav-link-title ml-5">Paramètre</span>
                                        </div>
                                        <i className="bi bi-chevron-down nav-icon text-[10px]"></i>
                                    </Link>
                                
                                    <div className={clsx({"hidden": !location.pathname.includes("setting/")})}>
                                        <Link to="setting/bank" className={clsx("nav-link hover:cursor-pointer items-center", {"active": location.pathname ="/setting/" || location.pathname.includes("setting/bank")})}>
                                            Banques
                                        </Link>
                                        <a className="nav-link hover:cursor-pointer" >Devises</a>
                                        <a className="nav-link hover:cursor-pointer" >Type de fournisseurs</a>
                                        <a className="nav-link hover:cursor-pointer" >Unités</a>
                                        <Link to="setting/quality" className={clsx("nav-link hover:cursor-pointer items-center", {"active": location.pathname.includes("setting/quality")})}>
                                            Qualités
                                        </Link>
                                        <Link to="setting/role" className={clsx("nav-link hover:cursor-pointer items-center", {"active": location.pathname.includes("setting/role")})}>
                                            Rôles
                                        </Link>
                                        <Link to="setting/user" className={clsx("nav-link hover:cursor-pointer items-center", {"active": location.pathname.includes("setting/user")})}>
                                            Utilisateurs
                                        </Link>
                                        <Link to="setting/fare-category" className={clsx("nav-link hover:cursor-pointer items-center", {"active": location.pathname.includes("setting/fare-category")})}>
                                            Catégories tarifaires
                                        </Link>
                                        <Link to="setting/catalogues" className={clsx("nav-link hover:cursor-pointer items-center", {"active": location.pathname.includes("setting/catalogues")})}>
                                            Catalogues
                                        </Link>
                                    </div>
                                </div>
                              {/*   <div>
                                    <Link 
                                        className={clsx("nav-link flex justify-between items-center", {"active": activeClient.parent})}  
                                        to="#" 
                                        onClick={() => { 
                                            setActiveClient({...activeClient,parent:!activeClient.parent})
                                            setActiveSetting({child: false, parent:false})
                                        }}
                                    >
                                        <div className="flex items-center !justify-start">
                                            <BsPerson className="text-[16px]" />
                                            <span className="nav-link-title ml-5">Client</span>
                                        </div>
                                        <i className="bi bi-chevron-down nav-icon text-[10px]"></i>
                                    </Link>
                                
                                    <div className={clsx({"hidden": !activeClient.parent})}>
                                        <a className="nav-link" >
                                            Listes
                                        </a>
                                        <a className="nav-link" >Besoins</a>
                                        <a className="nav-link" >Commandes</a>
                                    </div>
                                </div> */}
                                  <div>
                                    <Link 
                                        className={clsx("nav-link flex justify-between items-center", {"active": location.pathname.includes("stocks/")})}  
                                        to="stocks/" 
                                        onClick={() => { 
                                            setActiveClient({...activeClient,parent:!activeClient.parent})
                                            setActiveSetting({child: false, parent:false})
                                        }}
                                    >
                                        <div className="flex items-center !justify-start">
                                            <BsPersonGear className="text-[16px]" />
                                            <span className="nav-link-title ml-[18px] ">Gestion des stocks</span>
                                        </div>
                                        <i className="bi bi-chevron-down nav-icon text-[10px] ml-2"></i>
                                    </Link>
                                
                                    <div className={clsx({"hidden": !activeClient.parent})}>
                                        <a className={clsx("nav-link",{"active": location.pathname === "/stocks/"})} >Familles / Sous familles </a>
                                        <a className="nav-link" >Besoins</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AsideBar