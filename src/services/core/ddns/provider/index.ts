import { Base } from "../../../index"

export class ProviderService extends Base {
  list() {
    return this.request<{
      providers: {
        id: string
        provider: string
        website: string
      }[]
    }>("SYNO.Core.DDNS.Provider", "list")
  }
}
