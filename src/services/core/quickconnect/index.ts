import { Base } from "../../index"
import { PermissionService } from "./permission"

export class QuickConnectService extends Base {
  get permission() {
    return new PermissionService(this._settings)
  }

  get() {
    return this.request<{
      ddns_domain: string
      domain: string
      enabled: boolean
      myds_account: string
      region: string
      server_alias: string
      server_id: string
    }>("SYNO.Core.QuickConnect", "get")
  }

  status() {
    return this.request<{
      alias_status: string
      status: string
    }>("SYNO.Core.QuickConnect", "status", undefined, 1)
  }

  checkAvailability() {
    return this.request<{
      available: boolean
      code: number
      country: string
    }>("SYNO.Core.QuickConnect", "check_availability", undefined, 3)
  }
}
