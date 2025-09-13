import { Base } from "../../index";

export class Upgrade extends Base {
  status() {
    return this.request<{
      allow_upgrade: boolean
      status: 'none' | unknown
    }>("SYNO.Core.Upgrade", "status")
  }

  didUserSeeNewUpgradeSettingToast() {
    return this.request<boolean>("SYNO.Core.Upgrade", "did_user_see_new_upgrade_setting_toast")
  }
}