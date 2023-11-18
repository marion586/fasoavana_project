import { useAppSelector } from "@/apps/hooks/app.hooks";
import { QualityModel, RequestQuality } from "../core/models/quality_model";

const useResponseDataQuality = (): QualityModel[] =>  useAppSelector((state) => state.qualitiesData.response.data || [])
const useResponsePagination = () =>  useAppSelector((state) => state.qualitiesData.response?.pagination)
const useRequest = (): RequestQuality =>  useAppSelector((state) => state.qualitiesData.request)
const useLoading = (): boolean =>  useAppSelector((state) => state.qualitiesData.isLoading)
const useResponseData = () =>  useAppSelector((state) => state.qualitiesData)
export {
    useResponseData,
    useResponseDataQuality,
    useResponsePagination,
    useLoading,
    useRequest
}
