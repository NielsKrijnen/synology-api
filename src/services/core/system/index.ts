import { Base } from "../..";
import { SystemHealth, SystemInfo, SystemNetwork, SystemProcess, SystemUtilization, SystemVolume } from "./types";

export class System extends Base {
  info() {
    return this.request<SystemInfo>("SYNO.Core.System", "info")
  }

  status() {
    return this.request<{ is_system_crashed: boolean, upgrade_ready: boolean }>("SYNO.Core.System.Status", "get")
  }

  shutdown() {
    return this.request("SYNO.Core.System", "shutdown")
  }

  reboot() {
    return this.request("SYNO.Core.System", "reboot")
  }

  network() {
    return this.request<SystemNetwork>("SYNO.Core.System", "info", { type: "network" })
  }

  volume() {
    return this.request<SystemVolume>("SYNO.Core.System", "info", { type: "storage_v2" })
  }

  health() {
    return this.request<SystemHealth>("SYNO.Core.System.SystemHealth", "get")
  }

  process() {
    return this.request<SystemProcess>("SYNO.Core.System.Process", "list")
  }

  utilization() {
    return this.request<SystemUtilization>("SYNO.Core.System.Utilization", "get")
  }
}