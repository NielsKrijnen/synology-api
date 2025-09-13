import { Base } from "../../../index";

export class InfoService extends Base {
  loadDSInfo() {
    return this.request<{
      admin_configured: boolean
      ew20_website_url: string
      first_admin_login: boolean
      privacy_agreement: string
      promote_ew: boolean
      udc_check_state: string
      udc_enabled: string
      welcome_hide: boolean
      welcome_upgrade_step: boolean
    }>("SYNO.Core.QuickStart.Info", "load_ds_info")
  }
}