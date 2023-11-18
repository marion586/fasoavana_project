/* eslint-disable @typescript-eslint/no-explicit-any */
import {AxiosResponse} from 'axios'
import api from "@/shared/api/ApiHelper"
import { QualityModel } from '../models/quality_model'

const POST_DATA_QUALITY = "/qualities"

export const postDataQuality = (data:QualityModel):Promise<any> => {
    return api.post(POST_DATA_QUALITY, {label:data.label}).then((response: AxiosResponse<any>) => response).catch((error) => error)
}

export const patchDataQuality = (data:QualityModel):Promise<any> => {
    return api.patch(`${POST_DATA_QUALITY}/${data.id}`, data).then((response: AxiosResponse<any>) => response).catch((error) => error)
}