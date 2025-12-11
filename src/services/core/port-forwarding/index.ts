import { Base } from "../../index"
import { RouterConfService } from "./router-conf"
import { RulesService } from "./rules"

export class PortForwardingService extends Base {
  get routerConf() {
    return new RouterConfService(this._settings)
  }

  get rules() {
    return new RulesService(this._settings)
  }
}
