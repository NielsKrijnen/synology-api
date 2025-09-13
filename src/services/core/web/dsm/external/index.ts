import { Base } from "../../../../index";

export class ExternalService extends Base {
  get() {
    return this.request<{ hostname: string }>("SYNO.Core.Web.DSM.External", "get")
  }
}