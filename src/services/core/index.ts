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

  getUser(params: {
    name: string
    additional?: ("description" | "email" | "expired" | "cannot_chg_passwd" | "passwd_never_expire" | "password_last_change")[]
  }) {
    return this.request<{
      users: [{
        name: string
        uid: number
        cannot_chg_passwd?: boolean
        description?: string
        email?: string
        expired?: "normal" | "now" | string
        passwd_never_expire?: boolean
        password_last_change?: number
      }]
    }>("SYNO.Core.User", "get", params)
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

  listNetworkInterfaces() {
    return this.request<{
      ifname: string
      ip: string
      mask: string
      speed: number
      status: string
      type: string
      use_dhcp: boolean
    }[]>("SYNO.Core.Network.Interface", "list")
  }

  listGroups(params?: {
    user?: string
  }) {
    return this.request<{
      groups: {
        description: string
        gid: number
        name: string
      }[]
      offset: number
      total: number
    }>("SYNO.Core.Group", "list", { name_only: false, ...params })
  }

  listGroupMembers(params: {
    group: string
    ingroup?: boolean
  }) {
    return this.request<{
      offset: number
      total: number
      users: {
        description: string
        name: string
        uid: number
      }[]
    }>("SYNO.Core.Group.Member", "list", params)
  }

  getGroupAdminCheck(params: {
    name: string | string[]
  }) {
    return this.request<{
      groups: {
        is_admin: boolean
        name: string
      }[]
    }>("SYNO.Core.Group", "admin_check", params)
  }

  async createGroup(params: {
    name: string
  }) {
    await this.request("SYNO.Core.Group", "create", params)
  }

  async deleteGroup(params: {
    name: string | string[]
  }) {
    await this.request("SYNO.Core.Group", "delete", params)
  }

  listSharePermissionsByUser(params: {
    name: string
    user_group_type: "local_user"
  }) {
    return this.request<{
      shares: {
        inherit: string
        is_aclmode: boolean
        is_custom: boolean
        is_deny: boolean
        is_mask: boolean
        is_readonly: boolean
        is_sync_share: boolean
        is_unit_permission: boolean
        is_writable: boolean
        name: string
        share_path: string
      }[]
      total: number
    }>("SYNO.Core.Share.Permission", "list_by_user", params)
  }
}