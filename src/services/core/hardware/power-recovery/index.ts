import { Base } from "../../../index"

export class PowerRecoveryService extends Base {
  async set(params: { rc_power_config: boolean; wol1: boolean }) {
    await this.request("SYNO.Core.Hardware.PowerRecovery", "set", params)
  }
}
