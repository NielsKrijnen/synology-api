import { Base } from "../index";
import { DiskService } from "./disk";
import { CGIService } from "./cgi";

export class Storage extends Base {
  get cgi() {
    return new CGIService(this._settings)
  }

  get disk() {
    return new DiskService(this._settings)
  }
}