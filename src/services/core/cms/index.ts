import { Base } from "../../index";
import { InfoService } from "./info";

export class CMSService extends Base {
  get info() {
    return new InfoService(this._settings)
  }
}