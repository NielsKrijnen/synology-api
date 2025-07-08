import { Settings } from "../client";
import { APIResponse } from "./types";
import { APIConfig } from "../config";

function isArray(value: any): value is Array<any> {
  return value.constructor.name === "Array"
}

export class Base {
  constructor(protected readonly settings: Settings) {}

  private async getRequest(path: "entry.cgi" | "auth.cgi", api: string, method: string, version: number, params?: Record<string, any>) {
    if (!this.settings.region && this.settings.hostname.includes("quickconnect")) {
      const response = await fetch("https://global.quickconnect.to/Serv.php", {
        method: "POST",
        body: JSON.stringify([
          {
            version: 1,
            command: "get_server_info",
            stop_when_error: false,
            stop_when_success: false,
            id: "mainapp_https",
            serverID: this.settings.hostname.split('.')[0],
            is_gofile: false,
            path: ""
          }
        ])
      })
      const info = await response.json()
      if (info[0].env.relay_region) {
        this.settings.region = info[0].env.relay_region
      }
    }

    const hostname = this.settings.hostname.includes("quickconnect") ? `${this.settings.hostname.split('.')[0]}.${this.settings.region}.quickconnect.to` : this.settings.hostname

    const url = new URL(`${this.settings.protocol}://${hostname}/webapi/${path}`);
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

    return this.settings.fetch(url, {
      headers: this.settings.headers,
      redirect: "follow"
    })
  }

  protected auth(method: "login", version: number, params?: Record<string, string>) {
    return this.getRequest("auth.cgi", "SYNO.API.Auth", method, version, params)
  }

  protected async entry<T>(api: string, method: string, version: number, params?: Record<string, any>) {
    const response = await this.getRequest("entry.cgi", api, method, version, params)
    let json: APIResponse<T>
    try {
      json = await response.clone().json()
    } catch {
      throw await response.text()
    }
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