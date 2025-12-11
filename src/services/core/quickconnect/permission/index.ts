import { Base } from "../../../index"

export class PermissionService extends Base {
  get() {
    return this.request<{
      services: {
        enabled: boolean
        id: string
      }[]
    }>("SYNO.Core.QuickConnect.Permission", "get")
  }
}
