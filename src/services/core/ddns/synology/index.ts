import { Base } from "../../../index";

export class SynologyService extends Base {
  getMyDSAccount() {
    return this.request<{
      email: string
    }>("SYNO.Core.DDNS.Synology", "get_myds_account")
  }
}