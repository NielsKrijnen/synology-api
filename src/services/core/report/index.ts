import { Base } from "../../index"
import { Analyzer } from "./analyzer"
import { Config } from "./config"

export class Report extends Base {
  get analyzer() {
    return new Analyzer(this._settings)
  }

  get config() {
    return new Config(this._settings)
  }

  list() {
    return this.request<{
      total: number
      reports: unknown[]
    }>("SYNO.Core.Report", "list")
  }
}
