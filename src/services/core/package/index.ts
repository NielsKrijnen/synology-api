import { Base } from "../../index";

export class PackageService extends Base {
  list() {
    return this.request<{
      packages: {
        id: string
        name: string
        timestamp: number
        version: `${number}.${number}.${number}-${number}`
      }[]
      total: number
    }>("SYNO.Core.Package", "list")
  }
}