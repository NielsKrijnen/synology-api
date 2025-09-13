import { Base } from "../../../index";
import { VPNServerConnections } from "../../types";

export class ConnectionService extends Base {
  enum() {
    return this.request<VPNServerConnections>("SYNO.VPNServer.Management.Connection", "enum", {
      sort: "login_time",
      dir: "DESC",
      start: 0,
      limit: 100
    })
  }
}