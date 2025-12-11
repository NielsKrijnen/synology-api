import { Base } from "../../index"
import { DSMService } from "./dsm"

export class WebService extends Base {
  get dsm() {
    return new DSMService(this._settings)
  }
}
