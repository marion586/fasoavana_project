import { useAppSelector } from "@apps/hooks/app.hooks";
import { Pagination, RequestData } from "@shared/models/data.model";
import { RootState } from "@apps/store";
import { RoleModelArray } from "../core/models/roles.model";


const useResponseData = (): RoleModelArray =>  useAppSelector((state:RootState) => state.roleData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.roleData.response?.pagination)
const useRequest = (): RequestData =>  useAppSelector((state:RootState) => state.roleData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.roleData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.roleData)
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest
}
