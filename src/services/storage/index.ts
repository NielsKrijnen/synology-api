import { Base } from "../index";
import { HealthInfo, StorageInfo } from "./types";

export class Storage extends Base {
  loadInfo() {
    return this.request<StorageInfo>("SYNO.Storage.CGI.Storage", "load_info")
  }

  getSmartTestLog(device: string) {
    return this.request("SYNO.Core.Storage.Disk", "get_smart_test_log", { device })
  }

  getHealthInfo(device: string) {
    return this.request<HealthInfo>("SYNO.Storage.CGI.Smart", "get_health_info", { device })
  }
}