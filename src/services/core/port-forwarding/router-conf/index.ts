import { Base } from "../../../index";

export class RouterConfService extends Base {
  get() {
    return this.request<{
      limit_upnp_portmap_number: boolean
      router_brand: string
      router_max_rule: string
      router_model: string
      router_port: string
      router_protocol: string
      router_version: string
      support_change_port: boolean
      support_natpmp: string
      support_upnp: string
    }>("SYNO.Core.PortForwarding.RouterConf", "get")
  }
}