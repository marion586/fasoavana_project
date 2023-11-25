import { Http } from "@/shared/api/http";

export default class MaterialService {
  static async addMaterial(data: any): Promise<any> {
    return await Http.post("/material/add", data);
  }
  static async getAllMaterials(): Promise<any> {
    return await Http.get("/material");
  }
}
