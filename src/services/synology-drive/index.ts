import { Base } from "../index"
// noinspection ES6PreferShortImport
import { IndexService } from "./index/index"

export class SynologyDriveService extends Base {
  get index() {
    return new IndexService(this._settings)
  }
}
