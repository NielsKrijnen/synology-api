import { Base } from "../../index";
import { APIResponse } from "../../types";

export class AuthService extends Base {
  async login(params: {
    account: string
    passwd: string
    otp_code?: string
  }) {
    const response = await this.authRequest("login", 7, {
      format: "cookie",
      enable_syno_token: "yes",
      ...params
    })
    let json: APIResponse<{
      account: string
      device_id: string
      sid: string
      is_portal_port: boolean
      synotoken: string
    }>
    try {
      json = await response.clone().json()
    } catch {
      throw await response.text()
    }
    if (json.success) {
      this._settings.headers["X-SYNO-TOKEN"] = json.data.synotoken
      this._settings.sid = json.data.sid
      return json.data
    } else {
      throw json.error
    }
  }

  async logout() {
    await this.request("SYNO.API.Auth", "logout")
  }
}