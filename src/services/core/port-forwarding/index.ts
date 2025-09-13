import { Base } from "../../index";
import { RulesService } from "./rules";
import { RouterConfService } from "./router-conf";

export class PortForwardingService extends Base {
  get routerConf() {
    return new RouterConfService(this._settings)
  }

  get rules() {
    return new RulesService(this._settings)
  }
}