import { Base } from "../index"
import { AuthService } from "./auth"
import { InfoService } from "./info"

export class APIService extends Base {
  get auth() {
    return new AuthService(this._settings)
  }

  get info() {
    return new InfoService(this._settings)
  }
}
