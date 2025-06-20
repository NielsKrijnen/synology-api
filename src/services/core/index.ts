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