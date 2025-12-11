import { Base } from "../../../index"

export class ServerService extends Base {
  check() {
    return this.request<{
      action: string
      error: {
        code: number
      }
      stage: string
      success: boolean
    }>("SYNO.Core.Package.Server", "check")
  }
}
