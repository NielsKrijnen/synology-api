import { Base } from ".."
import { ManagementService } from "./management"
import { SettingsService } from "./settings"

export class VPNServer extends Base {
  get settings() {
    return new SettingsService(this._settings)
  }

  get management() {
    return new ManagementService(this._settings)
  }
}
