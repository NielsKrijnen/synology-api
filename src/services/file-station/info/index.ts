import { Base } from "../../index"
import type { FileStationInfo } from "../types"

export class InfoService extends Base {
  get() {
    return this.request<FileStationInfo>("SYNO.FileStation.Info", "get")
  }
}
