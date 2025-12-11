import { Base } from "../../../index"

export class InterfaceService extends Base {
  list() {
    return this.request<
      {
        ifname: string
        ip: string
        mask: string
        speed: number
        status: string
        type: string
        use_dhcp: boolean
      }[]
    >("SYNO.Core.Network.Interface", "list")
  }
}
