import { Base } from "../index";
import {
  FileStationInfo,
  FileStationShares,
  FileStationSharesParams,
  FileStationParamsAdditional,
  FileStationFilesParams,
  FileStationFiles,
  FileStationFileParams,
  FileStationFile,
  FileStationStartSearchParams, FileStationListSearchParams, FileStationListSearch
} from "./types";

export class FileStation extends Base {
  info() {
    return this.request<FileStationInfo>("SYNO.FileStation.Info", "get")
  }

  listShares<A extends FileStationParamsAdditional[] = []>(params?: FileStationSharesParams<A>) {
    return this.request<FileStationShares<A>>("SYNO.FileStation.List", "list_share", params)
  }

  list<A extends FileStationParamsAdditional[] = []>(params: FileStationFilesParams<A>) {
    return this.request<FileStationFiles<A>>("SYNO.FileStation.List", "list", params)
  }

  get<A extends FileStationParamsAdditional[] = []>(params: FileStationFileParams<A>) {
    return this.request<FileStationFile<A>>("SYNO.FileStation.List", "getinfo", params)
  }

  // TODO: Test
  startSearch(params: FileStationStartSearchParams) {
    return this.request<{ taskid: string }>("SYNO.FileStation.Search", "start", params)
  }

  // TODO: Test
  listSearch<A extends FileStationParamsAdditional[] = []>(params: FileStationListSearchParams<A>) {
    return this.request<FileStationListSearch<A>>("SYNO.FileStation.Search", "list", params)
  }

  // TODO: Test
  async stopSearch(taskId: string | string[]) {
    await this.request("SYNO.FileStation.Search", "stop", { taskid: taskId })
  }

  // TODO: Test
  async cleanSearch(taskId: string | string[]) {
    await this.request("SYNO.FileStation.Search", "clean", { taskid: taskId })
  }
}