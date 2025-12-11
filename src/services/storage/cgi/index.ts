import { Base } from "../../index"
import { SmartService } from "./smart"
import { StorageService } from "./storage"

export class CGIService extends Base {
  get smart() {
    return new SmartService(this._settings)
  }

  get storage() {
    return new StorageService(this._settings)
  }
}
