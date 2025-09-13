import { Base } from "../../../index";

export class ServerService extends Base {
  check(params?: {
    need_auto_smallupdate?: boolean
  }) {
    return this.request<{
      available: boolean
    }>("SYNO.Core.Upgrade.Server", "check", params)
  }
}