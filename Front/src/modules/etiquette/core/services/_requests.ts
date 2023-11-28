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
  static async getAllMaterialById(id: any): Promise<any> {
    return await Http.get(`/material/boite/${id}`);
  }
  static async getAllMaterialDispo(): Promise<any> {
    return await Http.get("/material/dispo");
  }
  static async updateMaterialById(id: any, data: any): Promise<any> {
    return await Http.patch(`/material/${id}`, data);
  }
  static async deleteMaterialById(id: any): Promise<any> {
    return await Http.delete(`/material/${id}`);
  }

  static async addBoite(data: any): Promise<any> {
    return await Http.post("/boite/add", data);
  }
  static async getAllBoites(): Promise<any> {
    return await Http.get("/boite");
  }

  static async getAllEtiquettes(): Promise<any> {
    return await Http.get("/etiquette");
  }
  static async getBoiteById(id: any): Promise<any> {
    return await Http.get(`/boite/${id}`);
  }
  static async updateBoiteById(id: any, data: any): Promise<any> {
    return await Http.patch(`/boite/${id}`, data);
  }
  static async deleteBoiteById(id: any): Promise<any> {
    return await Http.delete(`/boite/${id}`);
  }
}
