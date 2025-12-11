import { Base } from "../../../index"
import { USBService } from "./usb"

export class StorageService extends Base {
  get usb() {
    return new USBService(this._settings)
  }
}
