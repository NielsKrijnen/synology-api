import { Base } from "..";
import { InfoService } from "./info";

export class DSM extends Base {
  get info() {
    return new InfoService(this._settings)
  }
}