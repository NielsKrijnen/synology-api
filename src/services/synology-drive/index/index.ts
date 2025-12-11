import { Base } from "../../index"

export class IndexService extends Base {
  getNativeClientStatus() {
    return this.request<{
      num_of_event: number
      time_to_resume: number
    }>("SYNO.SynologyDrive.Index", "get_native_client_status")
  }
}
