import { Base } from "../../index.ts"
import { Conf } from "./conf"

export class SecurityScan extends Base {
  get conf() {
    return new Conf(this._settings)
  }
}
