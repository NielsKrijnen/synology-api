import { Auth } from "./services/auth";
import { Core } from "./services/core";

type Config = {
  /** IP-address or QuickConnect ID. For example: 192.168.1.8 or nasid.quickconnect.to */
  server: string
  sid?: string
  synoToken?: string
  port?: number
}

export type Settings = {
  headers: Record<string, string>
  hostname: string
  sid?: string
}

export class SynologyAPI {
  private settings: Settings = {
    headers: {},
    hostname: ""
  }

  constructor(config: Config) {
    if (config.server.includes("quickconnect")) {
      this.settings.headers["Referer"] = config.server
      const quickconnectId = config.server.split('.')[0]
      this.settings.hostname = `${quickconnectId}.de8.quickconnect.to`
    } else {
      this.settings.hostname = `${config.server}:${config.port ?? 5001}`
    }

    if (config.synoToken) this.settings.headers["X-SYNO-TOKEN"] = config.synoToken
    this.settings.sid = config.sid
  }

  get auth() {
    return new Auth(this.settings)
  }

  get core() {
    return new Core(this.settings)
  }
}