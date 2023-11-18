import { RequestData } from "@/shared/models/data.model";

export type RequestCustom = {
  label?: string | undefined  | null;
  "exists[parent]": boolean | undefined
};

export type RequestFamilly= RequestCustom | RequestData

export type FamillyModelItem = {
  id: number;
  label : string,
  parent: FamillyModelItem,
  families: Array<FamillyModelItem>
};

export type FamillyModelArray = Array<FamillyModelItem>

export type FamillyForm = {
  label: string,
  parent?: string
}