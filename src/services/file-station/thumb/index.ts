import { Base } from "../../index"
import type { FileStationThumbnailParams } from "../types"

export class ThumbService extends Base {
  get(params: FileStationThumbnailParams) {
    return this.request("SYNO.FileStation.Thumb", "get", params)
  }
}
