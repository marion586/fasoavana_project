/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination, RequestData } from "@/shared/models/data.model";

export type RequestCustom = {
  label?: string | undefined | null;
};

export type RequestWarehouse = RequestCustom | RequestData;
export type ResponseWarehouse = {
  data: WarehouseModel[];
  pagination: Pagination;
};

export type WarehouseModel = {
  id: number;
  label: string;
};
