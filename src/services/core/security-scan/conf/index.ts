import { Base } from "../../../index.ts"

export class Conf extends Base {
  set(options: { argGroup?: "company" | "home" | "custom" }) {
    return this.request<{ success: boolean }>("SYNO.Core.SecurityScan.Conf", "set", options)
  }
}
