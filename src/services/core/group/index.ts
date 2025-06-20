import { Base } from "../../index";

export class Group extends Base {
  list(params?: {
    user?: string
  }) {
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

  listMembers(params: {
    group: string
    ingroup?: boolean
  }) {
    return this.request<{
      offset: number
      total: number
      users: {
        description: string
        name: string
        uid: number
      }[]
    }>("SYNO.Core.Group.Member", "list", params)
  }

  getAdminCheck(params: {
    name: string | string[]
  }) {
    return this.request<{
      groups: {
        is_admin: boolean
        name: string
      }[]
    }>("SYNO.Core.Group", "admin_check", params)
  }

  async create(params: {
    name: string
  }) {
    await this.request("SYNO.Core.Group", "create", params)
  }

  async delete(params: {
    name: string | string[]
  }) {
    await this.request("SYNO.Core.Group", "delete", params)
  }

  set(params: {
    name: string
    new_name?: string
  }) {
    return this.request<{
      name: string
      gid: number
    }>("SYNO.Core.Group", "set", params)
  }
}