import { Base } from "../index"
import { CGIService } from "./cgi"
import { DiskService } from "./disk"

export class Storage extends Base {
  get cgi() {
    return new CGIService(this._settings)
  }

  get disk() {
    return new DiskService(this._settings)
  }
}
