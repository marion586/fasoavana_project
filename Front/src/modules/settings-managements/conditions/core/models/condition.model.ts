/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order, Pagination } from "@/shared/models/data.model";

export type RequestCondition = {
  "order[id]"?: Order
  abbreviation?: string
  keyword?: string;
  page: number;
  sort?: string | undefined; 
  itemsPerPage: number;
};

export type ResponseCondition = {
  data: ConditionModel[];
  pagination: Pagination;
};



export type ConditionModel = {
  id: number;
  label : string
};
