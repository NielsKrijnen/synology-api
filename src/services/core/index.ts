import { Base } from "..";
import { System } from "./system";

export class Core extends Base {
  async cmsInfo() {
    return this.entry<{
      joined: boolean
    }>("SYNO.Core.CMS.Info", "get", 1)
  }

  get system() {
    return new System(this.settings)
  }
}