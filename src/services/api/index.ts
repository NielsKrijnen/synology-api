import { Base } from "../index";
import { InfoService } from "./info";
import { AuthService } from "./auth";

export class APIService extends Base {
  get auth() {
    return new AuthService(this.settings)
  }

  get info() {
    return new InfoService(this.settings)
  }
}