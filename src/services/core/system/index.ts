import { Base } from "../..";
import { Utilization } from "./utilization";

export class System extends Base {
  info() {
    return this.entry("SYNO.Core.System", "info", 3)
  }

  shutdown() {
    return this.entry("SYNO.Core.System", "shutdown", 3)
  }

  get utilization() {
    return new Utilization(this.settings)
  }
}