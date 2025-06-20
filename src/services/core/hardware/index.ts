import { Base } from "../../index";

export class Hardware extends Base {
  async setPowerRecovery(params: {
    rc_power_config: boolean
    wol1: boolean
  }) {
    await this.request("SYNO.Core.Hardware.PowerRecovery", "set", params)
  }
}