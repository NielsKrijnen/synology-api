import { Base } from "../../../../index";

export class ESATAService extends Base {
  list() {
    return this.request<{
      devices: unknown[]
    }>("SYNO.Core.ExternalDevice.Storage.eSATA", "list")
  }
}