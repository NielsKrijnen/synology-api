type APIConfig = Record<string, number>

export const APIConfig = {
  "SYNO.ActiveInsight.CompleteCollection": 2,
  "SYNO.Core.System": 3,
  "SYNO.Core.System.Status": 1,
  "SYNO.Core.System.Utilization": 1,
  "SYNO.Core.System.SystemHealth": 1,
  "SYNO.Core.System.Process": 1,
  "SYNO.Core.CMS.Info": 1,
  "SYNO.Core.BandwidthControl": 2,
  "SYNO.Core.BandwidthControl.Protocol": 1,
  "SYNO.DSM.Info": 2,
  "SYNO.FileStation.Info": 2,
  "SYNO.FileStation.List": 2
} as const satisfies APIConfig