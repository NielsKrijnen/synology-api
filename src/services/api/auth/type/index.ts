import { Base } from "../../../index"

export class TypeService extends Base {
  get(params?: { account?: string }) {
    return this.request<
      {
        type: string
      }[]
    >("SYNO.API.Auth.Type", "get", params)
  }
}
