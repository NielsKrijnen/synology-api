import type { Settings } from "../client"
import { APIConfig } from "../config"
import type { APIResponse } from "./types"

// biome-ignore lint/suspicious/noExplicitAny: needed
function isArray(value: any): value is Array<any> {
  return value.constructor.name === "Array"
}

export class Base {
  protected readonly _settings: Settings

  constructor(settings: Settings) {
    this._settings = settings
  }

  private async getRequest(
    path: "entry.cgi" | "auth.cgi",
    api: string,
    method: string,
    version: number,
    // biome-ignore lint/suspicious/noExplicitAny: needed
    params?: Record<string, any>
  ) {
    const hostname = this._settings.hostname.includes("quickconnect")
      ? `${this._settings.hostname.split(".")[0]}.${this._settings.region ?? "fr1"}.quickconnect.to`
      : this._settings.hostname

    const url = new URL(`${this._settings.protocol}://${hostname}/webapi/${path}`)
    url.searchParams.set("api", api)
    url.searchParams.set("method", method)
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

    if (this._settings.sid) url.searchParams.set("_sid", this._settings.sid)

    return this._settings.fetch(url, {
      headers: this._settings.headers,
      redirect: "follow"
    })
  }

  protected authRequest(method: "login", version: number, params?: Record<string, string>) {
    return this.getRequest("auth.cgi", "SYNO.API.Auth", method, version, params)
  }

  // biome-ignore lint/suspicious/noExplicitAny: needed
  protected async entry<T>(api: string, method: string, version: number, params?: Record<string, any>) {
    const response = await this.getRequest("entry.cgi", api, method, version, params)
    let json: APIResponse<T>
    try {
      json = (await response.clone().json()) as APIResponse<T>
    } catch {
      throw await response.text()
    }
    if (json.success) {
      return json.data
    } else {
      throw json.error
    }
  }

  protected async request<T>(
    api: keyof typeof APIConfig,
    method: string,
    // biome-ignore lint/suspicious/noExplicitAny: needed
    params?: Record<string, any>,
    version?: number
  ) {
    return this.entry<T>(api, method, version ?? APIConfig[api], params)
  }
}
