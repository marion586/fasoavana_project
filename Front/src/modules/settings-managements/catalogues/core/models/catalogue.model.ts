import { RequestData } from "@/shared/models/data.model";

export type RequestCustom = {
  label?: string | undefined  | null;
};

export type RequestCatalogue= RequestCustom | RequestData

export type CatalogueModelItem = {
  id: number;
  label : string
};

export type CatalogueModelArray = Array<CatalogueModelItem>

export type CatalogForm = {
  label: string,
  id?: number
}
