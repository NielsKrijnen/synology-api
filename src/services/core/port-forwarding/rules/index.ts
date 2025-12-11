import { Base } from "../../../index"

export class RulesService extends Base {
  load() {
    return this.request<unknown[]>("SYNO.Core.PortForwarding.Rules", "load")
  }
}
