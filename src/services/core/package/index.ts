import { Base } from "../../index";
import { ServerService } from "./server";

export class PackageService extends Base {
  get server() {
    return new ServerService(this._settings)
  }

  list(params?: {
    additional?: ("status" | "status_sketch" | "dsm_apps")[]
  }) {
    return this.request<{
      packages: {
        id: string
        name: string
        timestamp: number
        version: `${number}.${number}.${number}-${number}`
      }[]
      total: number
    }>("SYNO.Core.Package", "list", params)
  }
}