import { Base } from "../../../index";

export class CRTService extends Base {
  list() {
    return this.request<{
      certificates: {
        desc: string
        id: string
        is_boken: boolean
        is_default: boolean
        issuer: {
          city?: string
          common_name: string
          country: string
          department?: string
          email?: string
          organization: string
          state?: string
        }
        key_types: string
        renewable: boolean
        self_signed_cacrt_info?: {
          issuer: {
            city?: string
            common_name: string
            country: string
            department?: string
            email?: string
            organization: string
            state?: string
          }
          subject: {
            city?: string
            common_name: string
            country: string
            department?: string
            email?: string
            organization: string
            state?: string
          }
        }
        services: {
          display_name: string
          display_name_i18n?: string
          isPkg: boolean
          multiple_cert?: boolean
          owner: string
          service: string
          subscriber: string
          user_setable?: boolean
        }[]
        signature_algorithm: string
        subject: {
          city?: string
          common_name: string
          country?: string
          department?: string
          email?: string
          organization?: string
          state?: string
          sub_alt_name: string[]
        }
        user_deletable: boolean
        valid_from: string
        valid_to: string
      }[]
    }>("SYNO.Core.Certificate.CRT", "list")
  }
}