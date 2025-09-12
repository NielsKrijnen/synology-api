import { Base } from "../..";
import { SystemProcess, SystemUtilization } from "./types";
import { Status } from "./status";
import { SystemHealthService } from "./system-health";

export class System extends Base {
  get status() {
    return new Status(this.settings)
  }

  get systemHealth() {
    return new SystemHealthService(this.settings)
  }

  info(params?: { type?: "network" | "storage_v2" }) {
    return this.request<Record<string, any>>("SYNO.Core.System", "info", {
      type: params?.type
    })
  }

  shutdown() {
    return this.request("SYNO.Core.System", "shutdown")
  }

  reboot() {
    return this.request("SYNO.Core.System", "reboot")
  }

  process() {
    return this.request<SystemProcess>("SYNO.Core.System.Process", "list")
  }

  utilization() {
    return this.request<SystemUtilization>("SYNO.Core.System.Utilization", "get")
  }

  getResetButton() {
    return this.request<{
      retain_admin_pwd: boolean
    }>("SYNO.Core.System.ResetButton", "get")
  }
}