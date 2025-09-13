import { Base } from "../../../index";
import { VPNServerConfig } from "../../types";

export class ConfigService extends Base {
  statusLoad() {
    return this.request<VPNServerConfig>("SYNO.VPNServer.Settings.Config", "status_load")
  }
}