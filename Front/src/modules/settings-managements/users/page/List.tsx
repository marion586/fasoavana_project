/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { LvCard } from "@shared/components/LvCard";
import { useNavigate } from "react-router-dom";
import { BiSortAlt2 } from "react-icons/bi";
import { ItemsPerPageChoices } from "@shared/models/helper";
import Select from "react-select";
import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../core/actions";
import { AppDispatch } from "@/apps/store";
import Loading from "@/shared/components/Loading";
import { setUserRequest, setUserReset } from "../core/reducers/user.reducer";
import clsx from "clsx";
import { useResponseData, useResponseDataUser } from "../libs";
import { useBaseUrl } from "@/shared/hooks";
import { BsTrash } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { toAbsoluteUrl } from "@/shared/libs/AssetHelpers";
import { UserModel } from "../core/models/user_model";
export const List = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState<UserModel | null>(null)
  const [open, setOpen] = useState<boolean>(false);
  const userResponeData = useResponseDataUser();
  const { request, isLoading, error } = useResponseData();
  const dispatch: AppDispatch = useDispatch();
  const showModal = (userItem: UserModel) => {
    setUser(userItem)
    setOpen(true);
  };


  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };
  const itemsOptions = ItemsPerPageChoices?.map((i) => {
    return {
      value: i?.toString(),
      label: i?.toString(),
    };
  });
  const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    console.log(Page, itemsPerPage);
  };

  useEffect(() => {
    dispatch(fetchUsers({ ...request }));
  }, [dispatch, request]);

  useEffect(() => {
    return () => {
      dispatch(setUserReset());
    };
  }, []);

  const baseUrl =useBaseUrl()

  if (error)
    return <div className="text-center text-7xl">une erreur à survenue</div>;
  return (
    <LvCard>
      <div className="flex justify-between items-center w-full">
        <div className="text-[16px] font-semibold text-black">Utilisateur</div>
        <div className="flex justify-end ">
          <button
            onClick={() => navigate("create")}
            className="flex items-center justify-center gap-2 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            <AiOutlineUserAdd className="h-6 w-6" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="flex items-center gap-2 justify-end">
          <div className="h-[16px] w-[16px] text-[#677788]">
            <FaSearch />
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-[#677788] pr-2"
            type="text"
            id="search"
            onChange={(e) => {
              console.log(e);
              dispatch(setUserRequest({ ...request, keyword: e.target.value }));
            }}
            placeholder=""
          />
        </div>
      </div>
      <div className="font-sans bg-[#F8FAFD] rounded-b-[10px] mt-3">
        <div className="overflow-auto z-50">
          <table className="w-full table-fixed">
            <thead className="">
              <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
                <th className="py-3 px-6 w-32 text-left text-[#677788]">
                  <span className="text-[10px]">photo</span>
                  <BiSortAlt2 className="ml-1 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6 text-left  text-[#677788]">
                  <span className="text-[10px]">Nom</span>
                  <BiSortAlt2 className="ml-1 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6 text-left text-[#677788]">
                  <span className="text-[10px]">prénom</span>
                  <BiSortAlt2 className="ml-1 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6 text-left w-32  text-[#677788]">
                  <span className="text-[10px]">Rôle</span>
                  <BiSortAlt2 className="ml-1 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6  text-[#677788]">
                  <span className="text-[10px]">supply chain manager</span>
                  <BiSortAlt2 className="ml-1 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6 text-left w-32 text-[#677788]">
                  <span className="text-[10px]">Société</span>
                  <BiSortAlt2 className="ml-1 inline w-5 h-5 hover:cursor-pointer" />
                </th>
                <th className="py-3 px-6  w-28  text-[#677788]">
                  <span className="text-[10px]">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
              {userResponeData?.map((user) => {
                return (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 bg-white hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">
                      {user?.imageProfile ?
                      <img
                      className="w-8 h-8 rounded-full border-gray-200 border transform hover:scale-125"
                      src={`${baseUrl}${user?.imageProfile}`}
                    /> :
                    <img
                    className="w-8 h-8 rounded-full border-gray-200 border transform hover:scale-125"
                    src={toAbsoluteUrl("media/avatar/001-avatar.png")}
                  />
                    }
                    </td>
                    <td className="py-3 px-6">
                      <span>{user?.firstname}</span>
                    </td>
                    <td className="py-3 px-6">
                      <span>{user?.name}</span>
                    </td>
                    <td className="py-3 px-6">
                      <span className="text-xs">
                        {user?.capabilities?.name}
                      </span>
                    </td>
                    <td className="py-3 px-6 flex justify-center ">
                      <span
                        className={clsx(
                          "text-white !h-8  !w-12 flex justify-center items-center  rounded-md text-xs uppercase bg-[#6AD860]",
                          {
                            "bg-[#6AD860]": user?.capabilities?.supply,
                            "bg-[#b02e2e]": !user?.capabilities?.supply,
                          }
                        )}
                      >
                        {user?.capabilities?.supply ? "Oui" : "non"}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className="text-sm">{user?.company?.name}</span>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex">
                        <FiEdit3 className="w-5 h-5 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                        <BsTrash onClick={() => showModal(user)} className="w-5 h-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/**pagination */}
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 items-center">
          <span>Afficher</span>
          <label>
            <Select
              options={itemsOptions}
              value={{
                value: request.limit.toString(),
                label: request.limit.toString(),
              }}
              onChange={(e) => {
                updatePage(1, e?.value ? parseInt(e?.value) : 10);
                dispatch(
                  setUserRequest({
                    ...request,
                    limit: e?.value ? parseInt(e?.value) : 10,
                  })
                );
              }}
              styles={selectCustomPagination}
              isSearchable={false}
            />
          </label>
          <div>sur 0</div>
        </div>
        <nav aria-label="Pagination" className="flex justify-end items-center">
          <a href="#" className="mr-2 rounded hover:bg-gray-100">
            <span>Préc.</span>
          </a>
          <a
            href="#"
            className="text-center h-[35px] w-[35px] text-white bg-[#0E3B62] rounded hover:bg-[#0E3B62] mr-3 lv-py-2"
          >
            1
          </a>
          <a
            href="#"
            className=" text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2"
          >
            2
          </a>
          <a href="#" className=" ml-2 rounded hover:bg-gray-100">
            Suiv.
          </a>
        </nav>
      </div>
      {/**modal */}
      <Modal
        maskClosable={false}
        centered
        title= {<span className='text-black font-bold text-[16px]'>Suppresion d'utilisateur</span>}
        open={open}
        onOk={handleCancel}
        onCancel={handleCancel}
        okText="J'ai compris"
        cancelText= "Annuler"
        okButtonProps={{className:"!text-center !bg-[#DD1016] !h-[40px]"}}
        cancelButtonProps={{className:"!text-center !h-[40px]"}}
         
       
      >
        <p>Vous etes sur de supprimer {user?.firstname}  {user?.name}</p>
      </Modal>
      <Loading loading={isLoading} />
    </LvCard>
  );
  
};
