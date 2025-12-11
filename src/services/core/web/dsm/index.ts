import { Base } from "../../../index"
import { ExternalService } from "./external"

export class DSMService extends Base {
  get external() {
    return new ExternalService(this._settings)
  }
}
