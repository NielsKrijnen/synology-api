import { Base } from "../../index";
import { PowerRecoveryService } from "./power-recovery";
import { FanSpeedService } from "./fan-speed";

export class Hardware extends Base {
  get powerRecovery() {
    return new PowerRecoveryService(this._settings)
  }

  get fanSpeed() {
    return new FanSpeedService(this._settings)
  }
}