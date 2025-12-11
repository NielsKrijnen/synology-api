import { Base } from "../../index"

export class ConnectionService extends Base {
  list(params?: { additional?: ("tray_status" | "newest_change")[] }) {
    return this.request<{
      conn: unknown[]
      is_pause: boolean
      total: number
      tray_status?: string
      update_count?: number
      newest_change?: {
        action: string
        base_name: string
      }
    }>("SYNO.SynologyDriveShareSync.Connection", "list", params)
  }
}
