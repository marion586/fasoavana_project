import { useAppSelector } from "@apps/hooks/app.hooks";
import { BankModel, RequestBank } from "../core/models/bank.model";
import { Pagination } from "@shared/models/data.model";
import { RootState } from "@apps/store";

const useResponseData = (): BankModel[] =>
  useAppSelector((state: RootState) => state.materials.response.data || []);
const useResponsePagination = (): Pagination =>
  useAppSelector((state: RootState) => state.materials.response?.pagination);
const useRequest = (): RequestBank =>
  useAppSelector((state: RootState) => state.materials.request);
const useLoading = (): boolean =>
  useAppSelector((state: RootState) => state.materials.isLoading);
const useResponse = () => useAppSelector((state: RootState) => state.materials);
export {
  useResponseData,
  useResponse,
  useResponsePagination,
  useLoading,
  useRequest,
};
