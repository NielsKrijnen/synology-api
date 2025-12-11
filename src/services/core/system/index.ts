import { Base } from "../.."
import { ProcessService } from "./process"
import { ResetButtonService } from "./reset-button"
import { Status } from "./status"
import { SystemHealthService } from "./system-health"
import { UtilizationService } from "./utilization"

export class System extends Base {
  get status() {
    return new Status(this._settings)
  }

  get systemHealth() {
    return new SystemHealthService(this._settings)
  }

  get process() {
    return new ProcessService(this._settings)
  }

  get utilization() {
    return new UtilizationService(this._settings)
  }

  get resetButton() {
    return new ResetButtonService(this._settings)
  }

  info(params?: { type?: "network" | "storage_v2" }) {
    // biome-ignore lint/suspicious/noExplicitAny: needed
    return this.request<Record<string, any>>("SYNO.Core.System", "info", {
      type: params?.type
    })
  }

  shutdown() {
    return this.request("SYNO.Core.System", "shutdown")
  }

  reboot() {
    return this.request<Record<string, never>>("SYNO.Core.System", "reboot", {}, 2)
  }
}
