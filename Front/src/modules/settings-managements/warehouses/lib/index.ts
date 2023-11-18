import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { WarehouseModel, RequestWarehouse } from "../core/models/warehouse.model";
import { Pagination } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { useMemo, useEffect } from "react";
import { fetchWarehouses } from "../core/actions";
import { END_POINT_WAREHOUSES } from "@/shared/constants/constants";
const useResponseData = (): WarehouseModel[] =>  useAppSelector((state:RootState) => state.warehouseData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.warehouseData.response?.pagination)
const useRequest = (): RequestWarehouse =>  useAppSelector((state:RootState) => state.warehouseData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.warehouseData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.warehouseData)
const useDataWarehouseOption = () => {
    const warehouses = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchWarehouses({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])
    return useMemo(() => {
      return warehouses.map((warehouse) => ({...warehouse,label: warehouse?.label,value:`${END_POINT_WAREHOUSES}/${warehouse?.id}`}))
    }, [warehouses])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataWarehouseOption
}
