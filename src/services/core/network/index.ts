import { Base } from "../../index"
import { InterfaceService } from "./interface"
import { PPPoEService } from "./pppoe"

export class NetworkService extends Base {
  get interface() {
    return new InterfaceService(this._settings)
  }

  get pppoe() {
    return new PPPoEService(this._settings)
  }

  get() {
    return this.request<{
      arp_ignore: boolean
      dns_manual: boolean
      dns_primary: string
      dns_secondary: string
      enable_windomain: boolean
      gateway: string
      gateway_info: {
        ifname: string
        ip: string
        mask: string
        status: string
        type: string
        use_dhcp: boolean
      }
      ipv4_first: boolean
      multi_gateway: boolean
      server_name: string
      v6gateway: string
    }>("SYNO.Core.Network", "get")
  }
}
