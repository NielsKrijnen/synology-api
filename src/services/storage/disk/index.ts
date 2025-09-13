import { Base } from "../../index";

export class DiskService extends Base {
  getSmartTestLog(device: string) {
    return this.request("SYNO.Core.Storage.Disk", "get_smart_test_log", { device })
  }
}