import { useAppSelector } from "@apps/hooks/app.hooks";
import { BankModel, RequestBank } from "../core/models/bank.model";
import { Pagination } from "@shared/models/data.model";
import { RootState } from "@apps/store";

const useResponseData = (): BankModel[] =>  useAppSelector((state:RootState) => state.banksData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.banksData.response?.pagination)
const useRequest = (): RequestBank =>  useAppSelector((state:RootState) => state.banksData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.banksData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.banksData)
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest
}
