import { Base } from "../../index"
import { PersonalUpdaterService } from "./personal-updater"

export class DesktopService extends Base {
  get personalUpdater() {
    return new PersonalUpdaterService(this._settings)
  }
}
