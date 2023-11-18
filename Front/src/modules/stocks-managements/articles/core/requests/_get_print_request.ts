/* eslint-disable @typescript-eslint/no-explicit-any */
//import { exportPDFRequest } from "@/shared/libs/export"
import api from "@shared/api/ApiHelper"
//import { ApiResponse } from '@/shared/models/response.model'
//import axios from "axios";

export const GET_PRINT_QRCODE_URL = (id:string) => `/qrCode/${id}/imprimer`

/**
 * @description print qr code
 * @param RequestData 
 * @returns ApiResponse<any>
 */
export const getPrintQrCodeArticle = (id:string):Promise<any> => {
  //  return api.get(GET_PRINT_QRCODE_URL(id),{responseType: 'blob'}).then((response: ApiResponse<any>) => response).catch((error) => error)
return api.get(GET_PRINT_QRCODE_URL(id))
  .then(response => {
    console.log(response);
    
    const contentDisposition = response.headers['content-disposition'];
    const filename = contentDisposition.split('filename=')[1];
    const url = window.URL.createObjectURL(new Blob([response.data]));
    console.log(typeof url);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  })
  .catch(error => {
    console.error('Error downloading image:', error);
  });
 // return  exportPDFRequest(import.meta.env.VITE_APP_API_URL_DEV+GET_PRINT_QRCODE_URL(id))
}