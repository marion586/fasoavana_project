/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import LvHearder from "@shared/components/LvHeader";
import { LvCard } from "@shared/components/LvCard";
import { Table } from "../components/tables";
import { SearchGloblal } from "../components/form/SearchGloblal";
import { Pagination } from "../components/pagination";
import { useRequest } from "../lib";
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { fetchArticles } from "../core/action";
import {
  setArticleRequest,
  setArticleReset,
} from "../core/reducers/article.reducer";

export const List = () => {
  const request = useRequest();
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles(request));
  }, [dispatch, request]);

  useEffect(() => {
    return () => {
      dispatch(setArticleReset());
    };
  }, []);
  return (
    <LvCard>
      <LvHearder title="Articles" to="create">
        <button
          type="button"
          onClick={() => alert("impression")}
          className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
          Imprimer
        </button>
      </LvHearder>
      <div className="flex justify-between">
        <div className="flex justify-start sm:flex-col md:flex-row lg:flex-row gap-6 mt-4">
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            onChange={(e) =>
              dispatch(
                setArticleRequest({
                  ...request,
                  "identification.reference": e?.target?.value,
                })
              )
            }
            placeholder={"Références".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"Désignation".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"Famille".toUpperCase()}
          />
          <input
            className="lv-input-custom md:h-[38px] md:w-[25%] text-[#677788]"
            placeholder={"suivi stock".toUpperCase()}
          />
        </div>
        <div className="flex justify-end">
            <SearchGloblal />
        </div>
      </div>
      <div className="my-4">
        <Pagination />
      </div>
      <Table />
      <Pagination />
    </LvCard>
  );
};
