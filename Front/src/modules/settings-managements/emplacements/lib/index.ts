import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { Pagination, RequestData } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { EmplacementModelArray } from "../core/models/emplacement.model";
import {useEffect, useMemo} from "react"
import { fetchEmplacements } from "../core/action";
import { END_POINT_LOCATION } from "@/shared/constants/constants";

const useResponseData = (): EmplacementModelArray =>  useAppSelector((state:RootState) => state.emplacementsData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.emplacementsData.response?.pagination)
const useRequest = (): RequestData =>  useAppSelector((state:RootState) => state.emplacementsData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.emplacementsData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.emplacementsData)
const useDataLocationOption = () => {
    const locations = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchEmplacements({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])

    return useMemo(() => {
      return locations.map((location) => ({...location,label: location.locationCode,value:`${END_POINT_LOCATION}/${location?.id}`}))
    }, [locations])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataLocationOption
}
