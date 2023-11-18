import { useMemo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { Pagination, RequestData } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { fetchCountry } from "../core/action";
import { CountryModelArray } from "../core/model/country.model";


const useResponseData = (): CountryModelArray =>  useAppSelector((state:RootState) => state.countryData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.countryData.response?.pagination)
const useRequest = (): RequestData =>  useAppSelector((state:RootState) => state.countryData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.countryData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.countryData)
const useDataCountryOption = () => {
    const countries = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchCountry({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])
    
    return useMemo(() => {
      return countries.map((country) => ({label: country.nameFr,value:"/countries/"+country.id}))
    }, [countries])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataCountryOption
}
