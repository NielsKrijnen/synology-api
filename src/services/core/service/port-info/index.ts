import { Base } from "../../../index";

export class PortInfoService extends Base {
  load() {
    return this.request<{
      port_info: {
        desc: string
        dst_port: string[]
        name: string
        port_id: string
        protocol: string
        src_port: string[] | null
      }[]
    }>("SYNO.Core.Service.PortInfo", "load")
  }
}