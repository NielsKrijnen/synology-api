import { Base } from "../../../index"

export class Status extends Base {
  get() {
    return this.request<{
      is_system_crashed: boolean
      upgrade_ready: boolean
    }>("SYNO.Core.System.Status", "get")
  }
}
