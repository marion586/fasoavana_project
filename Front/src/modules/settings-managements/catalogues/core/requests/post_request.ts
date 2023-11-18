/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/shared/api/ApiHelper"
import { CatalogForm } from "../models/catalogue.model"

const END_POINT = "/catalogs"

export const postCatalog= (data:CatalogForm):Promise<any> => {
    return api.post(END_POINT, data).then((response) => response).catch((error) => error)
}

export const putCatalog= (data:CatalogForm, id: string):Promise<any> => {
    return api.patch(END_POINT+ "/"+ id, data).then((response) => response).catch((error) => error)
}