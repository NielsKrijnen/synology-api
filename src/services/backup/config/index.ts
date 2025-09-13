import { Base } from "../../index";
import { AutoBackupService } from "./auto-backup";

export class ConfigService extends Base {
  get autoBackup() {
    return new AutoBackupService(this._settings)
  }
}