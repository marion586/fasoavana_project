/* eslint-disable @typescript-eslint/no-explicit-any */
import {AxiosResponse} from 'axios'
import api from "@/shared/api/ApiHelper"

const GET_USERS_LIST = "/users"

export const getAllUsers = (data:any):Promise<any> => {
    console.log("data",data);
    
    return api.get(GET_USERS_LIST, {
        params:{...data,q:data?.keyword || ""}
    }).then((response: AxiosResponse<any>) => response).catch((error) => error)
}
