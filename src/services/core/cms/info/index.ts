import { Base } from "../../../index"

export class InfoService extends Base {
  get() {
    return this.request<{ joined: boolean }>("SYNO.Core.CMS.Info", "get")
  }
}
