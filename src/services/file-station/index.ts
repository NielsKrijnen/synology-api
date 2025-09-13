import { Base } from "../index";
import { InfoService } from "./info";
import { ListService } from "./list";
import { SearchService } from "./search";
import { ThumbService } from "./thumb";

export class FileStation extends Base {
  get info() {
    return new InfoService(this._settings)
  }

  get list() {
    return new ListService(this._settings)
  }

  get search() {
    return new SearchService(this._settings)
  }

  get thumb() {
    return new ThumbService(this._settings)
  }
}