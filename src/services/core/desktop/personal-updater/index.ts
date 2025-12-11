import { Base } from "../../../index"

export class PersonalUpdaterService extends Base {
  needUpdate() {
    return this.request<{
      need_update: boolean
    }>("SYNO.Core.Desktop.PersonalUpdater", "need_update")
  }
}
