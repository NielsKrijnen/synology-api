import { Base } from "..";
import { System } from "./system";
import { BandwidthControl } from "./bandwidth-control";
import { Hardware } from "./hardware";

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

  get hardware() {
    return new Hardware(this.settings)
  }

  getUpgradeStatus() {
    return this.request<{
      allow_upgrade: boolean
      status: string
    }>("SYNO.Core.Upgrade", "status")
  }

  listPackages() {
    return this.request<{
      packages: {
        id: string
        name: string
        timestamp: number
        version: `${number}.${number}.${number}-${number}`
      }[]
      total: number
    }>("SYNO.Core.Package", "list")
  }

  listShares() {
    return this.request<{
      shares: {
        desc: string
        is_usb_share: boolean
        name: string
        uuid: string
        vol_path: string
      }[]
      total: number
    }>("SYNO.Core.Share", "list")
  }

  listUsers(params?: {
    additional?: ("email" | "description" | "expired" | "2fa_status")[]
  }) {
    return this.request<{
      offset: number
      total: number
      users: {
        name: string
        email?: string
        expired?: "normal" | "now" | string
        "2fa_status": boolean
      }[]
    }>("SYNO.Core.User", "list", params)
  }

  getPasswordPolicy() {
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

  getPasswordExpiry() {
    return this.request<{
      allow_reset_after_expired: boolean
      enable_login_prompt: boolean
      enable_mail_notification: boolean
      mail_notification_days: string
      min_age_enable: boolean
      password_expire_enable: boolean
    }>("SYNO.Core.User.PasswordExpiry", "get")
  }

  listGroups() {
    return this.request<{
      groups: {
        description: string
        gid: number
        name: string
      }[]
      offset: number
      total: number
    }>("SYNO.Core.Group", "list", { name_only: false })
  }
}