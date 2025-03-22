import { Base } from "../..";

export class Utilization extends Base {
  get() {
    return this.entry("SYNO.Core.System.Utilization", "get", 1)
  }
}