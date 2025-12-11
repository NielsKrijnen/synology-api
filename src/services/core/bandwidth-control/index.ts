import { Base } from "../.."
import { ProtocolService } from "./protocol"
import type { SpeedLimits } from "./types"

export class BandwidthControl extends Base {
  get protocol() {
    return new ProtocolService(this._settings)
  }

  get(group: string) {
    return this.request<SpeedLimits>("SYNO.Core.BandwidthControl", "get", {
      name: group,
      owner_type: "local_group"
    })
  }
}
