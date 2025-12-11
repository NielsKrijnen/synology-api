import { Base } from "../../index"
import { ConfigService } from "./config"

export class SettingsService extends Base {
  get config() {
    return new ConfigService(this._settings)
  }
}
