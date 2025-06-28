import { Settings } from "../client";
import { APIResponse } from "./types";
import { APIConfig } from "../config";

function isArray(value: any): value is Array<any> {
  return value.constructor.name === "Array"
}

export class Base {
  constructor(protected readonly settings: Settings) {}

  private getRequest(path: "entry.cgi" | "auth.cgi", api: string, method: string, version: number, params?: Record<string, any>) {
    const url = new URL(`https://${this.settings.hostname}/webapi/${path}`);
    url.searchParams.set("api", api);
    url.searchParams.set("method", method);
    url.searchParams.set("version", version.toString())
    if (params) {
      for (const key in params) {
        if (params[key] !== undefined) {
          let value = params[key]
          if (isArray(value)) {
            value = `["${value.join('","')}"]`
          }
          url.searchParams.set(key, value.toString())
        }
      }
    }

    if (this.settings.sid) url.searchParams.set("_sid", this.settings.sid)

    return fetch(url, {
      headers: this.settings.headers,
      redirect: "follow"
    })
  }

  protected auth(method: "login", version: number, params?: Record<string, string>) {
    return this.getRequest("auth.cgi", "SYNO.API.Auth", method, version, params)
  }

  protected async entry<T>(api: string, method: string, version: number, params?: Record<string, any>) {
    const response = await this.getRequest("entry.cgi", api, method, version, params)
    const json = await response.json() as APIResponse<T>
    if (json.success) {
      return json.data
    } else {
      throw json.error
    }
  }

  protected async request<T>(api: keyof typeof APIConfig, method: string, params?: Record<string, any>) {
    return this.entry<T>(api, method, APIConfig[api], params)
  }
}