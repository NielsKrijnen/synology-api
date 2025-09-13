import { Base } from "../../../../index";

export class USBService extends Base {
  list() {
    return this.request<{
      devices: unknown[]
    }>("SYNO.Core.ExternalDevice.Storage.USB", "list")
  }
}