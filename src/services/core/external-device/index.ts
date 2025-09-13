import { Base } from "../../index";
import { StorageService } from "./storage";

export class ExternalDeviceService extends Base {
  get storage() {
    return new StorageService(this._settings)
  }
}