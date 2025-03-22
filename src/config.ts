type APIConfig = Record<string, number>

export const APIConfig = {
  "SYNO.Core.System": 3,
  "SYNO.Core.System.Status": 1,
  "SYNO.Core.System.Utilization": 1,
  "SYNO.Core.System.SystemHealth": 1,
  "SYNO.Core.System.Process": 1,
  "SYNO.DSM.Info": 2
} as const satisfies APIConfig