import { Base } from "../../index";
import { StorageService } from "./storage";
import { SmartService } from "./smart";

export class CGIService extends Base {
  get smart() {
    return new SmartService(this._settings)
  }

  get storage() {
    return new StorageService(this._settings)
  }
}