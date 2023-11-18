import { Order, Pagination } from "@shared/models/data.model";

type RequestQuality = {
  sort: string | undefined;
  keyword: string;
  page: number;
  limit: number;
  order: Order;
};


type ResponseQuality = {
  data: QualityModel[];
  pagination: Pagination;
};

type QualityModel = {
  id?: number | null | undefined | unknown;
  label: string;
};

export type { RequestQuality, ResponseQuality, QualityModel };
