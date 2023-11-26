/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from "@/shared/models/response.model";
import { AddBankModel, BankModel, Contact } from "../models/bank.model";
import api from "@/shared/api/ApiHelper";
import { AxiosResponse } from "axios";

const ADD_NEW_BANK_IDENTITY = "/banks"
const ADD_NEW_BANK_CONTACT = "/bank_contacts"

export const postNewBankIdentity = (data?: AddBankModel): Promise<ApiResponse<BankModel>> => {
  return api.post(ADD_NEW_BANK_IDENTITY, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}

export const postNewBankContact = (data?: Contact): Promise<ApiResponse<any>> => {
  return api.post(ADD_NEW_BANK_CONTACT, data).then((response: AxiosResponse<any>) => response).catch(error => error)
}