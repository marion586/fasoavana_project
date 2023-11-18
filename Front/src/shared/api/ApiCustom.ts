import { AxiosError, AxiosResponse } from "axios";
import api from "./ApiHelper";
import { ApiResponse } from "../models/response.model";

export const customGet = <T,E>(url:string) => {
    api.get<T>(url)
  .then((response: AxiosResponse<T>) => {
    // Traitement de la réponse
    const data: T = response.data;
    return data
    // ...
  })
  .catch((error: AxiosError<E>) => {
    // Gestion des erreurs
    if (error.response) {
      const apiError: ApiResponse<E> = error.response;
      return apiError
      // ...
    } else {
      console.error('Erreur de requête', error.message);
    }
  });
}