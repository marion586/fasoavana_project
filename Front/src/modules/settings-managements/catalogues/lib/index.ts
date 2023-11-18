import {useEffect, useMemo} from "react"
import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { Pagination } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { CatalogueModelArray, RequestCatalogue } from "../core/models/catalogue.model";
import { fetchCatalogs } from "../core/actions";
import { END_POINT_CATALOG } from "@/shared/constants/constants";


const useResponseData = (): CatalogueModelArray =>  useAppSelector((state:RootState) => state.catalogData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.catalogData.response?.pagination)
const useRequest = (): RequestCatalogue =>  useAppSelector((state:RootState) => state.catalogData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.catalogData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.catalogData)
const useDataCatalogueOption = () => {
    const famillies = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchCatalogs({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])
    
    return useMemo(() => {
      return famillies.map((familly) => ({label: familly.label,value:`${END_POINT_CATALOG}/${familly.id}`}))
    }, [famillies])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataCatalogueOption
}
