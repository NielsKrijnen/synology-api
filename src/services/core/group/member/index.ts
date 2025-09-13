import { Base } from "../../../index";

export class MemberService extends Base {
  list(params: {
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
}