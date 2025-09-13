import { Base } from "../../../index";

export class FanSpeedService extends Base {
  get() {
    return this.request<{
      all_disk_temp_fail: string
      cool_fan: string
      dual_fan_speed: string
      fan_support_adjust_by_ext_nic: string
      fan_type: number
    }>("SYNO.Core.Hardware.FanSpeed", "get")
  }
}