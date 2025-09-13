import { Base } from "../../index";
import { ConnectionService } from "./connection";

export class ManagementService extends Base {
  get connection() {
    return new ConnectionService(this._settings)
  }
}