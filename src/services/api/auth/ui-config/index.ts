import { Base } from "../../../index"
import type { Texts } from "./types"

export class UIConfigService extends Base {
  get() {
    return this.request<
      {
        cssPath: string
        jsPath: string
        texts:
          | {
              authenticator: Texts
            }
          | {
              fido: Texts
            }
          | {
              "enforce-2fa-wizard": Texts
            }
        version: string
      }[]
    >("SYNO.API.Auth.UIConfig", "get")
  }
}
