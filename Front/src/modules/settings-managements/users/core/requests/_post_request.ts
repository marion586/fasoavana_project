/* eslint-disable @typescript-eslint/no-explicit-any */
import {AxiosResponse} from 'axios'
import api from "@/shared/api/ApiHelper"

const POST_DATA_USER = "/users"

export const postDataUsers = (data:any):Promise<any> => {
    return api.post(POST_DATA_USER, data).then((response: AxiosResponse<any>) => response).catch((error) => error)
}
