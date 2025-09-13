import { Base } from "../../../index";
import { SystemUtilization } from "../types";

export class UtilizationService extends Base {
  get() {
    return this.request<SystemUtilization>("SYNO.Core.System.Utilization", "get")
  }
}