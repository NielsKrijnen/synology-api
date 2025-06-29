import { Auth } from "./services/auth";
import { Core } from "./services/core";
import { DSM } from "./services/dsm";
import { FileStation } from "./services/file-station";
import { VPNServer } from "./services/vpn-server";
import { API } from "./services/api";
import { Backup } from "./services/backup";

type Config = {
  /** IP-address or QuickConnect ID. For example, 192.168.1.8 or nasid.quickconnect.to */
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

// noinspection JSUnusedGlobalSymbols
export class SynologyAPI {
  private settings: Settings = {
    headers: {},
    hostname: ""
  }
  private api = new API(this.settings)

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

  get vpn() {
    return new VPNServer(this.settings)
  }
}