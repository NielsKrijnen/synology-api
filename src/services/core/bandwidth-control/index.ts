import { Base } from "../..";
import { Protocol, SpeedLimits } from "./types";

export class BandwidthControl extends Base {
  getSpeedLimits(group: string) {
    return this.request<SpeedLimits>("SYNO.Core.BandwidthControl", "get", {
      name: group,
      owner_type: "local_group"
    })
  }

  protocol(protocol: string) {
    return this.request<Protocol>("SYNO.Core.BandwidthControl.Protocol", "get", { protocol })
  }
}