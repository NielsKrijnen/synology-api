import { Base } from "../../../index"

export class PasswordExpiryService extends Base {
  get() {
    return this.request<{
      allow_reset_after_expired: boolean
      enable_login_prompt: boolean
      enable_mail_notification: boolean
      mail_notification_days: string
      min_age_enable: boolean
      password_expire_enable: boolean
    }>("SYNO.Core.User.PasswordExpiry", "get")
  }
}
