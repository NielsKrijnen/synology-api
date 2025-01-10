import { Auth } from "./services/auth";

export class SynologyAPI {
  constructor() {
  }

  get auth() {
    return new Auth()
  }
}