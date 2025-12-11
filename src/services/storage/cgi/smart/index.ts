import { Base } from "../../../index"
import type { HealthInfo } from "../../types"

export class SmartService extends Base {
  getHealthInfo(device: string) {
    return this.request<HealthInfo>("SYNO.Storage.CGI.Smart", "get_health_info", { device })
  }
}
