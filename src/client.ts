import { Auth } from "./services/auth";
import { Core } from "./services/core";
import { DSM } from "./services/dsm";
import { FileStation } from "./services/file-station";
import { VPNServer } from "./services/vpn-server";
import { API } from "./services/api";
import { Backup } from "./services/backup";
import { Storage } from "./services/storage";

type Fetch = (input: string | URL | globalThis.Request, init?: RequestInit) => Promise<Response>

type Config = {
  /** IP-address or QuickConnect ID. For example, 192.168.1.8 or nasid.quickconnect.to */
  server: string
  sid?: string
  synoToken?: string
  region?: string
  port?: number
  fetch?: Fetch
}

export type Settings = {
  headers: Record<string, string>
  hostname: string
  protocol: "http" | "https"
  fetch: Fetch
  region?: string
  sid?: string
}

// noinspection JSUnusedGlobalSymbols
export class SynologyAPI {
  private settings: Settings = {
    headers: {},
    protocol: "https",
    fetch,
    hostname: ""
  }
  private api = new API(this.settings)

  constructor(config: Config) {
    if (config.server.includes("quickconnect")) {
      this.settings.headers["Referer"] = config.server
      const quickconnectId = config.server.split('.')[0]
      this.settings.hostname = `${quickconnectId}.quickconnect.to`
      this.settings.protocol = "https"
    } else {
      this.settings.hostname = `${config.server}:${config.port ?? 5001}`
      this.settings.protocol = "http"
    }

    if (config.region) this.settings.region = config.region
    if (config.fetch) this.settings.fetch = config.fetch

    if (config.synoToken) this.settings.headers["X-SYNO-TOKEN"] = config.synoToken
    this.settings.sid = config.sid
  }

  info() {
    return this.api.info()
  }

  get backup() {
    return new Backup(this.settings)
  }

  get auth() {
    return new Auth(this.settings)
  }

  get core() {
    return new Core(this.settings)
  }

  get dsm() {
    return new DSM(this.settings)
  }

  get fileStation() {
    return new FileStation(this.settings)
  }

  get storage() {
    return new Storage(this.settings)
  }

  get vpn() {
    return new VPNServer(this.settings)
  }
}