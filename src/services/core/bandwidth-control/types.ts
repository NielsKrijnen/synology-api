export type SpeedLimits = {
  bandwidths: {
    download_limit_1: number
    download_limit_2: number
    name: string
    owner_type: string
    policy: string
    protocol: string
    protocol_ui: string
    schedule_plan: string
    upload_limit_1: number
    upload_limit_2: number
  }[]
}

export type Protocol = {
  policy: string
  protocol: string
  schedule_plan: string
}
