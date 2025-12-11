import { Base } from "../../../index"

export class ResetButtonService extends Base {
  get() {
    return this.request<{
      retain_admin_pwd: boolean
    }>("SYNO.Core.System.ResetButton", "get")
  }
}
