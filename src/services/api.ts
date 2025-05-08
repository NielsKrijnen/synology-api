import { Base } from ".";

export class API extends Base {
  info() {
    return this.request<Record<string, {
      maxVersion: number
      minVersion: number
      path: `${string}.cgi`
    }>>("SYNO.API.Info", "query")
  }
}