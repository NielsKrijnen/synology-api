import { Base } from "../../index";

export class Hardware extends Base {
  async setPowerRecovery(params: {
    rc_power_config: boolean
    wol1: boolean
  }) {
    await this.request("SYNO.Core.Hardware.PowerRecovery", "set", params)
  }

  getFanSpeed() {
    return this.request<{
      all_disk_temp_fail: string
      cool_fan: string
      dual_fan_speed: string
      fan_support_adjust_by_ext_nic: string
      fan_type: number
    }>("SYNO.Core.Hardware.FanSpeed", "get")
  }
}