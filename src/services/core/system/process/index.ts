import { Base } from "../../../index"
import type { SystemProcess } from "../types"

export class ProcessService extends Base {
  list() {
    return this.request<SystemProcess>("SYNO.Core.System.Process", "list")
  }
}
