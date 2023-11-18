import { RequestData } from "@/shared/models/data.model";

export type RequestCustom = {
  label?: string | undefined  | null;
};

export type RequestUnit= RequestCustom | RequestData

export type UnitModelItem = {
  id: number;
  name : string
};

export type UnitModelArray = Array<UnitModelItem>

export type UnitForm = {
  name: string,
  id?: number
}
