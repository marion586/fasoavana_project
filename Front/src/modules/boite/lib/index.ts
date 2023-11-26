import { useAppSelector } from "@apps/hooks/app.hooks";
import { BankModel, RequestBank } from "../core/models/bank.model";
import { Pagination } from "@shared/models/data.model";
import { RootState } from "@apps/store";

const useResponseData = (): BankModel[] =>
  useAppSelector((state: RootState) => state.boites.response.data || []);
const useResponseBoite = () =>
  useAppSelector((state: RootState) => state.boites.boite || []);
const useResponsePagination = (): Pagination =>
  useAppSelector((state: RootState) => state.boites.response?.pagination);
const useRequest = (): RequestBank =>
  useAppSelector((state: RootState) => state.boites.request);
const useLoading = (): boolean =>
  useAppSelector((state: RootState) => state.boites.isLoading);
const useResponse = () => useAppSelector((state: RootState) => state.boites);
export {
  useResponseData,
  useResponse,
  useResponsePagination,
  useLoading,
  useRequest,
  useResponseBoite,
};
