import { Base } from "../../../index"

export class ExtIPService extends Base {
  list() {
    return this.request<{
      ip: string
      ipv6: string
      type: string
    }>("SYNO.Core.DDNS.ExtIP", "list")
  }
}
