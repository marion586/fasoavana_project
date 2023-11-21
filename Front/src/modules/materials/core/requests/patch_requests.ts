/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/shared/models/response.model";
import {  AddBankModel,Contact} from "../models/bank.model";
import api from "@/shared/api/ApiHelper";
import { AxiosResponse } from "axios";

const UPDATE_BANK_IDENTITY = "/banks"
const UPDATE_BANK_CONTACT = "/bank_contacts"


export const patchBankIdentity = (data: AddBankModel,id:string): Promise<ApiResponse<any>> => {
  return api.patch(UPDATE_BANK_IDENTITY+"/"+id, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}

export const patchBankContact = (data: Contact,id:string): Promise<ApiResponse<any>> => {
  return api.patch(UPDATE_BANK_CONTACT+"/"+id, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}