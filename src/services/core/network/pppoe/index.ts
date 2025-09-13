import { Base } from "../../../index";

export class PPPoEService extends Base {
  list() {
    return this.request<{
      devs: string[]
      guest_enabled: boolean
      ifname: string
      ip: string
      is_default_gateway: number
      mask: string
      mtu_config: string
      password: string
      real_ifname: string
      status: string
      type: string
      use_dhcp: boolean
      username: string
    }>("SYNO.Core.Network.PPPoE", "list")
  }
}