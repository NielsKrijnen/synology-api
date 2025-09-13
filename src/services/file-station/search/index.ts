import { Base } from "../../index";
import {
  FileStationListSearch,
  FileStationListSearchParams,
  FileStationParamsAdditional,
  FileStationStartSearchParams
} from "../types";

export class SearchService extends Base {
  start(params: FileStationStartSearchParams) {
    return this.request<{ taskid: string }>("SYNO.FileStation.Search", "start", params)
  }

  list<A extends FileStationParamsAdditional[] = []>(params: FileStationListSearchParams<A>) {
    return this.request<FileStationListSearch<A>>("SYNO.FileStation.Search", "list", params)
  }

  // TODO: Test
  async stop(taskId: string | string[]) {
    await this.request("SYNO.FileStation.Search", "stop", { taskid: taskId })
  }

  async clean(taskId: string | string[]) {
    await this.request("SYNO.FileStation.Search", "clean", { taskid: taskId })
  }
}