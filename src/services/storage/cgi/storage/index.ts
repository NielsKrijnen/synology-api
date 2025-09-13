import { Base } from "../../../index";
import { StorageInfo } from "../../types";

export class StorageService extends Base {
  loadInfo() {
    return this.request<StorageInfo>("SYNO.Storage.CGI.Storage", "load_info")
  }
}