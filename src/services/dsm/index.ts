import { Base } from "..";
import { DSMInfo } from "./types";

export class DSM extends Base {
  info() {
    return this.request<DSMInfo>("SYNO.DSM.Info", "getinfo")
  }
}