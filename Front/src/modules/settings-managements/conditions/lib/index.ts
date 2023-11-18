import { useEffect,useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@apps/hooks/app.hooks";
import { ConditionModel, RequestCondition } from "../core/models/condition.model";
import { Pagination } from "@shared/models/data.model";
import { AppDispatch, RootState } from "@apps/store";
import { fetchConditions } from "../core/actions";
import { END_POINT_CONDITIONINGS } from "@/shared/constants/constants";

const useResponseData = (): ConditionModel[] =>  useAppSelector((state:RootState) => state.conditionsData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.conditionsData.response?.pagination)
const useRequest = (): RequestCondition =>  useAppSelector((state:RootState) => state.conditionsData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.conditionsData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.conditionsData)

const useDataConditionOption = () => {
    const conditions = useResponseData()
    const dispatch: AppDispatch = useAppDispatch()
    const request = useRequest()
    useEffect(() => {
      dispatch(fetchConditions({...request,page: 1,itemsPerPage:200}))
    }, [dispatch,request])

    return useMemo(() => {
      return conditions.map((condition) => ({...condition,label: condition.label,value: `${END_POINT_CONDITIONINGS}/${condition.id}`}))
    }, [conditions])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataConditionOption
}
