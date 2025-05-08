import { Base } from "..";
import { VPNServerConfig, VPNServerConnections } from "./types";

export class VPNServer extends Base {
  config() {
    return this.request<VPNServerConfig>("SYNO.VPNServer.Settings.Config", "status_load")
  }

  connections() {
    return this.request<VPNServerConnections>("SYNO.VPNServer.Management.Connection", "enum", {
      sort: "login_time",
      dir: "DESC",
      start: 0,
      limit: 100
    })
  }
}