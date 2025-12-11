import { Base } from "../../../index"

export class EthernetService extends Base {
  list() {
    return this.request<
      {
        ifname: string
        ip: string
        ipv6: unknown[]
      }[]
    >("SYNO.Core.DDNS.Ethernet", "list")
  }
}
