import { Base } from "..";
import { SettingsService } from "./settings";
import { ManagementService } from "./management";

export class VPNServer extends Base {
  get settings() {
    return new SettingsService(this._settings)
  }

  get management() {
    return new ManagementService(this._settings)
  }
}