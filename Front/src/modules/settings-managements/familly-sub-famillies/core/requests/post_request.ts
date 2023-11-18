/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/shared/api/ApiHelper"

const END_POINT = "/families"

export const postFamilly= (data:any):Promise<any> => {
    return api.post(END_POINT, data).then((response) => response).catch((error) => error)
}

export const putFamilly= (data:any, id: string):Promise<any> => {
    return api.patch(END_POINT+ "/"+ id, data).then((response) => response).catch((error) => error)
}