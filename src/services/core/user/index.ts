import { Base } from "../../index"
import { PasswordExpiryService } from "./password-expiry"
import { PasswordPolicyService } from "./password-policy"

export class UserService extends Base {
  get passwordPolicy() {
    return new PasswordPolicyService(this._settings)
  }

  get passwordExpiry() {
    return new PasswordExpiryService(this._settings)
  }

  list(params?: { additional?: ("email" | "description" | "expired" | "2fa_status")[] }) {
    return this.request<{
      offset: number
      total: number
      users: {
        name: string
        email?: string
        expired?: "normal" | "now" | string
        "2fa_status"?: boolean
      }[]
    }>("SYNO.Core.User", "list", params)
  }

  get(params: {
    name: string
    additional?: (
      | "description"
      | "email"
      | "expired"
      | "cannot_chg_passwd"
      | "passwd_never_expire"
      | "password_last_change"
    )[]
  }) {
    return this.request<{
      users: {
        name: string
        uid: number
        cannot_chg_passwd?: boolean
        description?: string
        email?: string
        expired?: "normal" | "now" | string
        passwd_never_expire?: boolean
        password_last_change?: number
      }[]
    }>("SYNO.Core.User", "get", params)
  }
}
