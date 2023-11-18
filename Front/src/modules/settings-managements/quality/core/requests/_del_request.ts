/* eslint-disable @typescript-eslint/no-explicit-any */
import {AxiosResponse} from 'axios'
import api from "@/shared/api/ApiHelper"

const DEL_QUALITY = "/qualities"

export const deleteDataQuality = (id?:string | any):Promise<any> => {
    return api.delete(`${DEL_QUALITY}/${id}`).then((response: AxiosResponse<any>) => response).catch((error) => error)
}