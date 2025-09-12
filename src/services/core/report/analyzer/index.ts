import { Base } from "../../../index";

export class Analyzer extends Base {
  getData(params: {
    /** @example "global" */
    id: string
    /** @example "volume" */
    source: string
  }) {
    return this.request<{
      analyses: {
        time: number
        volumes: {
          name: string
          size_total: number
          size_used: number
        }[]
      }[]
      total: number
    }>("SYNO.Core.Report.Analyzer", "getdata", params)
  }
}