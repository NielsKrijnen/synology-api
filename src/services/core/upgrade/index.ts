import { Base } from "../../index";
import { ServerService } from "./server";

export class Upgrade extends Base {
  get server() {
    return new ServerService(this._settings)
  }

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