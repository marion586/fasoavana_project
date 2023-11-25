import { Http } from "@/shared/api/http";

export default class MaterialService {
  static async addMaterial(data: any): Promise<any> {
    return await Http.post("/material/add", data);
  }
  static async getAllMaterials(): Promise<any> {
    return await Http.get("/material");
  }
  static async getMaterialById(id: any): Promise<any> {
    return await Http.get(`/material/${id}`);
  }
  static async updateMaterialById(id: any, data: any): Promise<any> {
    return await Http.patch(`/material/${id}`, data);
  }
  static async deleteMaterialById(id: any): Promise<any> {
    return await Http.delete(`/material/${id}`);
  }
}
