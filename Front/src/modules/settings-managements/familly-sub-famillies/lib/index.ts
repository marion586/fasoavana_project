import { useMemo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { Pagination } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { FamillyModelArray, RequestFamilly } from "../core/models/familly.model";
import { fetchFamillies } from "../core/actions";
import { END_POINT_FAMILLY } from "@/shared/constants/constants";


const useResponseData = (): FamillyModelArray =>  useAppSelector((state:RootState) => state.famillyData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.famillyData.response?.pagination)
const useRequest = (): RequestFamilly =>  useAppSelector((state:RootState) => state.famillyData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.famillyData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.famillyData)
const useDataFamillyOption = () => {
    const famillies = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchFamillies({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])

    return useMemo(() => {
      return famillies.map((familly) => ({label: familly.label,value:`${END_POINT_FAMILLY}/${familly.id}`}))
    }, [famillies])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataFamillyOption
}
