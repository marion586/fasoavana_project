/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState} from "react"
import Loading from "@/shared/components/Loading";
import { AiOutlineEye } from "react-icons/ai";
//import { BiSortAlt2 } from "react-icons/bi";
import { BsFileEarmarkText, BsJournalCheck, BsPrinter } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLoading, useResponseData } from "../../lib";
import { ArtilceModelItem } from "../../core/models/article.model";
import TableWrapper from "@/widgets/Table/TableWrapper";
import { TableHeader } from "@/widgets/Table/TableHeader";
import { useMemo } from "react";
import { artilceColumns } from "./_column";
import { useTable } from "react-table";
import { PrintQrCode } from "../ui/PrintQrCode";

export const Table = () => {
  const loading = useLoading();
  const articleList = useResponseData();
  const columns = useMemo( () =>artilceColumns, [] );
  const data  =  useMemo( () =>articleList, [articleList] );
  const {headers} = useTable({columns,data})
  const navigate = useNavigate();
  const onNavigateToProvider = () => {
    navigate("/procurement/providers/list/article/2");
  };
  const onNavigateToEditArticle = () => {
    navigate("/stocks-management/articles/edit/1");
  };

  const [open,setOpen] = useState<boolean>(false)
  const [qrcode,setQrcode] = useState<any>(null)
  return (
    <div>
      <TableWrapper>
         <TableHeader headers={headers} />
         <tbody className="rounded-md bg-[#F8FAFD]  border-solid border-t-[#E7EAF3] border-[0.5px] text-gray-600 text-sm font-light">
          {articleList.map((article: ArtilceModelItem) => (
            <tr
              className="border-b border-gray-200 bg-white hover:bg-gray-100"
              key={article.id}
            >
              <td className="lv-py-3 px-6">
                <span>{article?.identification?.reference}</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>{article?.identification?.designation}</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>{article?.descriptif?.catalog?.label}</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>En cours dev</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>En cours dev</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>{article?.identification?.suiviStock?.name}</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>{article?.identification?.prixAchat}</span>
              </td>
              <td className="lv-py-3 px-6">
                <span>{article?.identification?.uniteVente?.name}</span>
              </td>
              <td className="lv-py-3 flex">
                <AiOutlineEye
                  onClick={onNavigateToEditArticle}
                  className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"
                />
                <FiEdit3 className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                <BsJournalCheck
                  onClick={onNavigateToProvider}
                  className="w-6  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"
                />
                <BsFileEarmarkText className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                <BsPrinter onClick={() => {
                  setOpen(true)
                  setQrcode(article)
                  }} className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                <BsTrash className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
      <PrintQrCode open={open} setOpen={setOpen} qrcode={qrcode} />
      <Loading loading={loading} />
    </div>
  );
};

 {/*    <table className="w-full table-fixed">
       <thead className="">
          <tr className="bg-[#F8FAFD] border-solid border-t-[#E7EAF3] border-[0.5px]  text-[#677788] uppercase font-normal text-[12px]">
            <th className="lv-py-3 lv-px-6  text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">Références</span>
                <BiSortAlt2 className=" w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 w-[12%] text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">Désignation</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">Catalogue</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">Famille</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 center text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">sous Famille</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 center text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">suivi stock</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 center text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">prix d’achat</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 center text-[#677788]">
              <div className="flex items-center">
                <span className="text-[10px] font-sans">Unité vente</span>
                <BiSortAlt2 className="w-5 h-5 hover:cursor-pointer" />
              </div>
            </th>
            <th className="lv-py-3 lv-px-6 w-40  text-[#677788]">
              <span className="text-[10px]">Actions</span>
            </th>
          </tr>
  </thead>*
      </table> */}