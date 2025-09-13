import { Base } from "../../index";
import { CRTService } from "./crt";

export class CertificateService extends Base {
  get crt() {
    return new CRTService(this._settings)
  }
}