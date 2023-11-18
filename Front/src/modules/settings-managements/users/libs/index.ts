import { useAppSelector } from "@/apps/hooks/app.hooks";

const useResponseDataUser = () =>  useAppSelector((state) => state.usersData.response.data || [])
const useResponsePagination = () =>  useAppSelector((state) => state.usersData.response?.pagination)
const useRequest = () =>  useAppSelector((state) => state.usersData.request)
const useLoading = (): boolean =>  useAppSelector((state) => state.usersData.isLoading)
const useResponseData = () =>  useAppSelector((state) => state.usersData)
export {
    useResponseData,
    useResponseDataUser,
    useResponsePagination,
    useLoading,
    useRequest
}