import { Base } from "../../index"
import { MemberService } from "./member"

export class Group extends Base {
  get member() {
    return new MemberService(this._settings)
  }

  list(params?: { user?: string }) {
    return this.request<{
      groups: {
        description: string
        gid: number
        name: string
      }[]
      offset: number
      total: number
    }>("SYNO.Core.Group", "list", { name_only: false, ...params })
  }

  adminCheck(params: { name: string | string[] }) {
    return this.request<{
      groups: {
        is_admin: boolean
        name: string
      }[]
    }>("SYNO.Core.Group", "admin_check", params)
  }

  async create(params: { name: string }) {
    await this.request("SYNO.Core.Group", "create", params)
  }

  async delete(params: { name: string | string[] }) {
    await this.request("SYNO.Core.Group", "delete", params)
  }

  set(params: { name: string; new_name?: string }) {
    return this.request<{
      name: string
      gid: number
    }>("SYNO.Core.Group", "set", params)
  }
}
