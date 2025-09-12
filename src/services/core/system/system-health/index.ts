import { Base } from "../../../index";
import { SystemHealth } from "../types";

export class SystemHealthService extends Base {
  get() {
    return this.request<SystemHealth>("SYNO.Core.System.SystemHealth", "get")
  }
}