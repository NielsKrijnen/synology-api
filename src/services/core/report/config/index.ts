import { Base } from "../../../index"

export class Config extends Base {
  get() {
    return this.request<{
      default_audio: string
      default_document: string
      default_exe: string
      default_image: string
      default_iso: string
      default_video: string
      default_web: string
      default_zip: string
    }>("SYNO.Core.Report.Config", "get")
  }
}
