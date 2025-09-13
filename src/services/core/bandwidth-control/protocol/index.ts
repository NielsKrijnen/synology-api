import { Base } from "../../../index";
import { Protocol } from "../types";

export class ProtocolService extends Base {
  get(protocol: string) {
    return this.request<Protocol>("SYNO.Core.BandwidthControl.Protocol", "get", { protocol })
  }
}