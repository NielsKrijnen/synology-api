import { Base } from "../index";
import {
  FileStationInfo,
  FileStationShares,
  FileStationSharesParams,
  FileStationParamsAdditional, FileStationFilesParams
} from "./types";

export class FileStation extends Base {
  get() {
    return this.request<FileStationInfo>("SYNO.FileStation.Info", "get")
  }

  listShares<A extends FileStationParamsAdditional[] = []>(params?: FileStationSharesParams<A>) {
    return this.request<FileStationShares<A>>("SYNO.FileStation.List", "list_share", params)
  }

  list(params: FileStationFilesParams) {
    return this.request("SYNO.FileStation.List", "list", params)
  }
}