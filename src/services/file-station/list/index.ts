import { Base } from "../../index"
import type {
  FileStationFile,
  FileStationFileParams,
  FileStationFiles,
  FileStationFilesParams,
  FileStationParamsAdditional,
  FileStationShares,
  FileStationSharesParams
} from "../types"

export class ListService extends Base {
  listShare<A extends FileStationParamsAdditional[] = []>(params?: FileStationSharesParams<A>) {
    return this.request<FileStationShares<A>>("SYNO.FileStation.List", "list_share", params)
  }

  list<A extends FileStationParamsAdditional[] = []>(params: FileStationFilesParams<A>) {
    return this.request<FileStationFiles<A>>("SYNO.FileStation.List", "list", params)
  }

  getInfo<A extends FileStationParamsAdditional[] = []>(params: FileStationFileParams<A>) {
    return this.request<FileStationFile<A>>("SYNO.FileStation.List", "getinfo", params)
  }
}
