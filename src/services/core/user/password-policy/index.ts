import { Base } from "../../../index"

export class PasswordPolicyService extends Base {
  get() {
    return this.request<{
      enable_reset_passwd_by_email: boolean
      password_must_change: boolean
      strong_password: {
        exclude_common_password: boolean
        exclude_history: boolean
        exclude_username: boolean
        history_num: number
        included_numeric_char: boolean
        included_special_char: boolean
        min_length: number
        min_length_enable: boolean
        mixed_case: boolean
      }
    }>("SYNO.Core.User.PasswordPolicy", "get")
  }
}
