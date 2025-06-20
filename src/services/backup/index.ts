import { Base } from "../index";

export class Backup extends Base {
  getConfig() {
    return this.request<{
      enable: boolean
      enc_method: "auto" | string
      last_check_time: string
      last_status: string
      last_success_time: string
      myds_account: string
      pwd: string
    }>("SYNO.Backup.Config.AutoBackup", "get")
  }

  getStatus() {
    return this.request<{
      last_check_time: string
      last_status: "backingup" | "success" | string
      last_success_time: string
    }>("SYNO.Backup.Config.AutoBackup", "status")
  }

  async createBackup() {
    await this.request("SYNO.Backup.Config.AutoBackup", "backup", { instant: true })
  }
}