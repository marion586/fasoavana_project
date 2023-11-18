/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order, Pagination } from "@/shared/models/data.model";

export type RequestBank = {
  "bankContacts.firstname"?: string;
  "order[id]"?: Order
  abbreviation?: string
  country?: string; 
  sort?: string | undefined;
  keyword?: string;
  page: number;
  itemsPerPage: number;
};

export type ResponseBank = {
  data: BankModel[];
  pagination: Pagination;
};

export type AddBankModel = {
  abbreviation: string;
  entitled: string;
  interlocutor: string;
  address: string;
  complement: string;
  city: string;
  region: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  country: any;
}

export type BankModel = {
  id: number;
  abbreviation: string;
  entitled: string;
  interlocutor: string;
  address: string;
  complement: string;
  city: string;
  region: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  bankContacts: Contact[];
  country: Country;
};

export type Contact = {
  id?: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  civility: string;
  bank: string;
  country: string;
};

export type Civility = {
  id: number;
  label: string;
};

export type Country = {
  id?: number;
  code?: string;
  nameEn: string;
  nameFr: string;
};
