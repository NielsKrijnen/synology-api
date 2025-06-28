import { Base } from "../index";

export class Storage extends Base {
  loadInfo() {
    return this.request("SYNO.Storage.CGI.Storage", "load_info")
  }
}