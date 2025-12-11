import { Base } from "../../../index"

export class RecordService extends Base {
  list() {
    return this.request<{
      next_update_time: string
      records: {
        enable: boolean
        heartbeat: boolean
        hostname: string
        id: string
        interface_v4: string
        interface_v6: string
        ip: string
        ipv6: string
        lastupdated: string
        net: string
        provider: string
        status: string
        username: string
      }[]
    }>("SYNO.Core.DDNS.Record", "list")
  }
}
