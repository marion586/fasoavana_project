import { Pagination } from "@/shared/models/data.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
type RequestUser = {
  sort: string;
  keyword: string;
  page: number;
  limit: number;
  order: string;
};

type ResponseUser = {
  data: UserModel[];
  pagination: Pagination;
};

type UserModel = {
  id:           number;
  email:        string;
  capabilities: Capabilities;
  name:         string;
  firstname:    string;
  phone:        string;
  quality:      Quality;
  company:      Company;
  imageProfile?: string | null
};



export type Capabilities = {
  id:          number;
  name:        string;
  supply:      boolean;
  permissions: string[];
  createdAt:   Date;
}

export type Company = {
  id:   number;
  name: string;
}

export type Quality = {
  id:    number;
  label: string;
}


export type { RequestUser, ResponseUser, UserModel};
