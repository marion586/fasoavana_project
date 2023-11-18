/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@shared/api/ApiHelper"
import { ApiResponse } from '@/shared/models/response.model'
import { END_POINT_ARTICLE } from "@/shared/constants/constants"


export const postArticle= (data:any) => {
    return api.post(END_POINT_ARTICLE, data).then((response) => response).catch((error) => error)
}

export const putLocation= (data:any,id:string):Promise<any> => {
    return api.patch(END_POINT_ARTICLE+'/'+id, data).then((response: ApiResponse<any>) => response).catch((error) => error)
}
