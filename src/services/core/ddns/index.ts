import { Base } from "../../index"
import { EthernetService } from "./ethernet"
import { ExtIPService } from "./ext-ip"
import { ProviderService } from "./provider"
import { RecordService } from "./record"
import { SynologyService } from "./synology"

export class DDNSService extends Base {
  get provider() {
    return new ProviderService(this._settings)
  }

  get record() {
    return new RecordService(this._settings)
  }

  get extIP() {
    return new ExtIPService(this._settings)
  }

  get synology() {
    return new SynologyService(this._settings)
  }

  get ethernet() {
    return new EthernetService(this._settings)
  }
}
