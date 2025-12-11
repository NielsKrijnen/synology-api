import { Base } from "../../index"
import { PortInfoService } from "./port-info"

export class ServiceService extends Base {
  get portInfo() {
    return new PortInfoService(this._settings)
  }
}
