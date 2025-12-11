import { Base } from "../../index"

export class InfoService extends Base {
  query() {
    return this.request<
      Record<
        string,
        {
          maxVersion: number
          minVersion: number
          path: `${string}.cgi`
        }
      >
    >("SYNO.API.Info", "query")
  }
}
