/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useAppSelector } from "@apps/hooks/app.hooks";
import { useState, useEffect,useMemo } from "react"
import { Pagination } from "@shared/models/data.model";
import { RootState } from "@apps/store";
import { ArtilceModelArray, StockTrackingArray, TypeSalePriceArray } from "../core/models/article.model";
import { getAllStockTracking, getAllTypeSalePrice } from "../core/requests/_get_request";
import { END_POINT_TYPE_SALE_PRICE } from "@/shared/constants/constants";


const useResponseData = (): ArtilceModelArray =>  useAppSelector((state:RootState) => state.articleData.response.data || [])
const useResponsePagination = (): Pagination =>  useAppSelector((state:RootState) => state.articleData.response?.pagination)
const useRequest = () =>  useAppSelector((state:RootState) => state.articleData.request)
const useLoading = (): boolean =>  useAppSelector((state:RootState) => state.articleData.isLoading)
const useResponse = () =>  useAppSelector((state:RootState) => state.articleData)

// form
const useDataBody = () => useAppSelector((state:RootState) => state.articleDataForm)
const useDataBodyIndetificator = () => useAppSelector((state:RootState) => state.articleDataForm.identification)
const useDataBodyDescriptor = () => useAppSelector((state:RootState) => state.articleDataForm.descriptif)
const useDataBodyFreeField = () => useAppSelector((state:RootState) => state.articleDataForm.champLibre)
const useDataBodySetting = () => useAppSelector((state:RootState) => state.articleDataForm.parametre)
const useDataBodyQrcode  = () => useAppSelector((state:RootState) => state.articleDataForm.qrcode || "")
const useDataBodyStoreArticles = () => useAppSelector((state:RootState) => state.articleDataForm.storeArticles || "")

/**
 * @hook stock tracking
 */

const useResponseDataStockTracking = () => {
    const [stockTracking,setStockTracking] = useState<StockTrackingArray>([])
    useEffect(() => {
      const load =async () => {
        const response = await getAllStockTracking({
            itemsPerPage: 200, page: 1,
            sort: undefined,
            keyword: undefined,
            limit: undefined,
            order: undefined
        })
        setStockTracking(response?.data?.data || [])
      }
      load()
    }, [])
    return useMemo(() =>{
       return stockTracking.map((data) => ({...data, value:`/suivi_stocks/${data.id}`,label: data?.name}))
    },[stockTracking])
}

/**
 * @hook type sale price
 */

const useResponseDataTypeSalePrice = () => {
    const [typeSalePrice,setTypeSalePrice] = useState<TypeSalePriceArray>([])
    useEffect(() => {
      const load =async () => {
        const response = await getAllTypeSalePrice({
            itemsPerPage: 200, page: 1,
            sort: undefined,
            keyword: undefined,
            limit: undefined,
            order: undefined
        })
        setTypeSalePrice(response?.data?.data || [])
      }
      load()
    }, [])
    return useMemo(() =>{
       return typeSalePrice.map((data) => ({...data, value:`${END_POINT_TYPE_SALE_PRICE}/${data.id}`,label: data?.name}))
    },[typeSalePrice])
}
export {
    useResponseData,
    useResponse,
    useResponsePagination,
    useLoading,
    useRequest,
    useDataBodyIndetificator,
    useDataBodyDescriptor,
    useDataBodyFreeField,
    useDataBodySetting,
    useDataBodyQrcode,
    useDataBodyStoreArticles,
    useDataBody,
    useResponseDataStockTracking,
    useResponseDataTypeSalePrice
}
