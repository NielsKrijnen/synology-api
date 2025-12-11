import { Base } from "../../index"
import { FanSpeedService } from "./fan-speed"
import { PowerRecoveryService } from "./power-recovery"

export class Hardware extends Base {
  get powerRecovery() {
    return new PowerRecoveryService(this._settings)
  }

  get fanSpeed() {
    return new FanSpeedService(this._settings)
  }
}
