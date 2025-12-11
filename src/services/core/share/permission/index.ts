import { Base } from "../../../index"

export class PermissionService extends Base {
  listByUser(params: { name: string; user_group_type: "local_user" }) {
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
