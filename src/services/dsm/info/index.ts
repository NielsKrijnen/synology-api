import { Base } from "../../index";
import type { DSMInfo } from "../types";

export class InfoService extends Base {
  getInfo() {
    return this.request<DSMInfo>("SYNO.DSM.Info", "getinfo")
  }
}