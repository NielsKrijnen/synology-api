import { Settings } from "../client";
import { APIResponse } from "./types";

export class Base {
  constructor(protected readonly settings: Settings) {}

  private getRequest(path: "entry.cgi" | "auth.cgi", api: string, method: string, version: number, params?: Record<string, string>) {
    const url = new URL(`https://${this.settings.hostname}/webapi/${path}`);
    url.searchParams.set("api", api);
    url.searchParams.set("method", method);
    url.searchParams.set("version", version.toString())
    if (params) {
      for (const key in params) {
        url.searchParams.set(key, params[key])
      }
    }

    if (this.settings.sid) url.searchParams.set("_sid", this.settings.sid)

    return fetch(url, {
      headers: this.settings.headers
    })
  }

  protected auth(method: "login", version: number, params?: Record<string, string>) {
    return this.getRequest("auth.cgi", "SYNO.API.Auth", method, version, params)
  }

  protected async entry<T extends Record<string, any>>(api: string, method: string, version: number, params?: Record<string, string>) {
    const response = await this.getRequest("entry.cgi", api, method, version, params)
    const json = await response.json() as APIResponse<T>
    if (json.success) {
      return json.data
    } else {
      throw json
    }
  }

  protected async request<T extends Record<string, any>>() {

  }
}