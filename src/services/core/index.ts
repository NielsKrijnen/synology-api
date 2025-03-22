import { Base } from "..";
import { System } from "./system";
import { BandwidthControl } from "./bandwidth-control";

export class Core extends Base {
  async cmsInfo() {
    return this.request<{ joined: boolean }>("SYNO.Core.CMS.Info", "get")
  }

  get system() {
    return new System(this.settings)
  }

  get bandwidthControl() {
    return new BandwidthControl(this.settings)
  }
}