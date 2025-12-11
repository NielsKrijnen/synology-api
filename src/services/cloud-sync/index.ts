import { Base } from "../index"

export class CloudSyncService extends Base {
  listConn() {
    return this.request<{
      conn: {
        cloud_status: number
        exceed_maximum_files: boolean
        id: number
        link_status: number
        resource: string
        status: string
        task_display_name: string
        task_name: string
        type: string
        type_id: number
        unfinished_files: number
        user_id: string
        user_name: string
      }[]
      is_admin_mode: boolean
      is_pause: boolean
      notification: unknown | null
      total: number
      tray_status: string
    }>("SYNO.CloudSync", "list_conn")
  }
}
