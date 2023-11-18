import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { Pagination, } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { RequestUnit, UnitModelArray } from "../core/models/unit.model";
import { useEffect,useMemo } from "react";
import { fetchUnits } from "../core/actions";
import { END_POINT_SALE_UNIT } from "@/shared/constants/constants";

const useResponseData = (): UnitModelArray =>  useAppSelector((state:RootState) => state.unitData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.unitData.response?.pagination)
const useRequest = (): RequestUnit =>  useAppSelector((state:RootState) => state.unitData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.unitData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.unitData)
const useDataUnitsOption = () => {
    const units = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchUnits({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])

    return useMemo(() => {
      return units.map((unit) => ({...units,label: unit.name,value:`${END_POINT_SALE_UNIT}/${unit?.id}`}))
    }, [units])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataUnitsOption
}
