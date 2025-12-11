import { Base } from "../../index"
import { PermissionService } from "./permission"

export class ShareService extends Base {
  get permission() {
    return new PermissionService(this._settings)
  }

  list() {
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
}
