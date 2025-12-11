type DiskAction = {
  alert: boolean
  notification: boolean
  selectable: boolean
  show_lifetime_chart: boolean
}

type DiskActionStatus = {
  action_name: string
  action_progress: string
}

type DiskContainer = {
  order: number
  str: string
  supportPwrBtnDisable: boolean
  type: string
}

type DiskRemainLife = {
  trustable: boolean
  value: number
}

type DiskRemoteInfo = {
  compatibility: string
  unc: number
}

type Disk = {
  action: DiskAction
  action_status: DiskActionStatus
  action_status_category: string
  action_status_key: string
  adv_progress: string
  adv_status: string
  allocation_role: string
  below_remain_life_mail_notify_thr: boolean
  below_remain_life_show_thr: boolean
  below_remain_life_thr: boolean
  compatibility: string
  container: DiskContainer
  container_id: number
  device: string
  disable_secera: boolean
  diskType: string
  disk_code: string
  disk_location: string
  drive_status_category: string
  drive_status_key: string
  erase_time: number
  firm: string
  firmware_status: string
  has_system: boolean
  hide_info: unknown[]
  i18nNamingInfo: string
  id: string
  ihm_testing: boolean
  is4Kn: boolean
  isSsd: boolean
  isSynoDrive: boolean
  isSynoPartition: boolean
  is_bundle_ssd: boolean
  is_erasing: boolean
  longName: string
  m2_pool_support: boolean
  model: string
  name: string
  num_id: number
  order: number
  overview_status: string
  pciSlot: number
  perf_testing: boolean
  portType: string
  remain_life: DiskRemainLife
  remain_life_danger: boolean
  remote_info: DiskRemoteInfo
  sb_days_left: number
  sb_days_left_below_show_thres: boolean
  sb_days_left_critical: boolean
  sb_days_left_warning: boolean
  serial: string
  size_total: string
  slot_id: number
  smart_progress: string
  smart_status: string
  smart_test_limit: number
  smart_test_support: boolean
  smart_testing: boolean
  ssd_unhealth_reason: string
  status: string
  summary_status_category: string
  summary_status_key: string
  temp: number
  testing_progress: string
  testing_type: string
  tray_status: string
  ui_serial: string
  unc: number
  used_by: string
  vendor: string
  wcache_force_off: boolean
  wcache_force_on: boolean
  wdda_support: boolean
}

// Environment related types
type BatchTask = {
  max_task: number
  remain_task: number
}

type DataScrubbing = {
  sche_enabled: string
  sche_pool_order: string[]
  sche_status: string
}

type SpaceSizeLimit = {
  allocatable_size: number
  is_limited: boolean
  size_limit: number
}

type EnvStatus = {
  root_size_byte: number
  system_crashed: boolean
  system_need_repair: boolean
  system_rebuilding: boolean
}

type StorageMachineInfo = {
  isInternal: boolean
  isSAS: boolean
  machineSerial: string
  machineStatus: string
  modelName: string
  nameStr: string
  order: number
  ports: unknown[]
}

type EnvSupport = {
  ebox: boolean
  raid_cross: boolean
  sysdef: boolean
}

type Environment = {
  batchtask: BatchTask
  bay_number: string
  cache_max_ssd_num: number
  data_scrubbing: DataScrubbing
  eunits: unknown[]
  fs_acting: boolean
  hideExtraLineCharts: boolean
  is_space_actioning: boolean
  limit_fs_bytes_high_end: string
  limit_fs_bytes_peta: string
  m2_card_info: unknown[]
  max_fs_bytes: string
  model_name: string
  multipathStatus: string
  multipathSupport: boolean
  showpooltab: boolean
  space_size_limit: SpaceSizeLimit
  status: EnvStatus
  storageMachineInfo: StorageMachineInfo[]
  support: EnvSupport
  support_volume_encryption: boolean
  unique_key: string
}

// Overview data related types
type SampleLevelStr = {
  attention: string
  danger: string
  normal: string
}

type PoolsToShow = {
  detected_pool: unknown[]
  storage_pool: unknown[]
}

type OverviewData = {
  incompatible_eunit: unknown[]
  pools_to_show: PoolsToShow
  sample_level_str: SampleLevelStr
  space_affect_by_eunit_lost: boolean
  space_affect_by_location_mismatch: boolean
  status_level: string
}

type CanDoAction = {
  can_do: boolean
  errCode: number
  stopService: boolean
}

type SpaceStatus = {
  detail: string
  show_attention: boolean
  show_danger: boolean
  show_flag_detail: string
  status: string
  summary_status: string
}

type SSDTrim = {
  support: string
}

type Progress = {
  cur_step: number
  is_resync_speed_limited: boolean
  percent: string | number
  remaining_time: number
  step: string
  total_step: number
}

type VSpaceCanDo = {
  drbd: {
    resize: CanDoAction
  }
  flashcache: {
    apply: CanDoAction
    remove: CanDoAction
    resize: CanDoAction
  }
  snapshot: {
    resize: CanDoAction
  }
}

type CanDo = {
  convert_shr_to_pool: number
  delete: boolean
  disk_replace: boolean
  expand_by_disk: number
  migrate: {
    to_shr2: number
  }
}

type RaidDevice = {
  id: string
  slot: number
  status: string
}

type Raid = {
  designedDiskCount: number
  devices: RaidDevice[]
  hasParity: boolean
  minDevSize: string
  normalDevCount: number
  raidCrashedReason: number
  raidPath: string
  raidStatus: number
  spares: unknown[]
}

type StoragePoolSize = {
  total: string
  used: string
}

type StoragePool = {
  cacheStatus: string
  cache_disks: unknown[]
  can_assemble: boolean
  can_do: CanDo
  compatibility: boolean
  container: string
  data_scrubbing: {
    can_do_manual: boolean
    can_do_schedule: boolean
    reason: string
  }
  deploy_path: string
  desc: string
  device_type: string
  disk_failure_number: number
  disks: string[]
  drive_type: number
  id: string
  is_actioning: boolean
  is_backgroundbuilding: boolean
  is_scheduled: boolean
  is_writable: boolean
  last_done_time: number
  limited_disk_number: number
  maximal_disk_size: string
  minimal_disk_size: string
  minimal_spare_size: string
  missing_drives: unknown[]
  next_schedule_time: number
  num_id: number
  pool_path: string
  progress: Progress
  raidType: string
  raids: Raid[]
  repair_action: string
  scrubbingStatus: string
  show_assemble_btn: boolean
  size: StoragePoolSize
  space_path: string
  space_status: SpaceStatus
  spares: unknown[]
  ssd_trim: SSDTrim
  status: string
  suggestions: unknown[]
  summary_status: string
  timebackup: boolean
  uuid: string
  vol_desc: string
  vspace_can_do: VSpaceCanDo
}

type VolumeSize = {
  free_inode: string
  total: string
  total_device: string
  total_inode: string
  used: string
}

type Volume = {
  atime_checked: boolean
  atime_opt: string
  cacheStatus: string
  cache_advisor_running: boolean
  cache_disks: unknown[]
  dan_assemble: boolean
  can_do: CanDo
  container: string
  deploy_path: string
  desc: string
  device_type: string
  disk_failure_number: number
  disks: unknown[]
  drive_type: number
  fs_type: string
  id: string
  is_acting: boolean
  is_actioning: boolean
  is_backgroundbuilding: boolean
  is_encrypted: boolean
  is_inode_full: boolean
  is_locked: boolean
  is_scheduled: boolean
  is_vault_contain_key: boolean
  is_writable: boolean
  last_done_time: number
  limited_disk_number: number
  max_fs_size: string
  metadata_cache_hard_lower_bound_byte: number
  metadata_cache_option_show: boolean
  missing_drives: unknown[]
  next_schedule_time: number
  num_id: number
  pool_path: string
  progress: Progress
  raidType: string
  repair_action: string
  scrubbingStatus: string
  show_assemble_btn: boolean
  size: VolumeSize
  space_path: string
  space_status: SpaceStatus
  ssd_trim: SSDTrim
  status: string
  suggestions: unknown[]
  summary_status: string
  timebackup: boolean
  used_by_gluster: boolean
  uuid: string
  vol_attribute: string
  vol_desc: string
  vol_path: string
  vspace_can_do: VSpaceCanDo
}

export type StorageInfo = {
  detected_pools: unknown[]
  disks: Disk[]
  env: Environment
  missing_pools: unknown[]
  overview_data: OverviewData
  ports: unknown[]
  storagePools: StoragePool[]
  volumes: Volume[]
}

export type HealthInfo = {
  healthInfo: {
    count: number
    history: {
      incremental: HistoryData
      single: HistoryData
    }
    overview: Overview
    smartInfo: SmartAttribute[]
  }
}

type HistoryData = {
  idnf: [number, number][]
  offset: number
  remainLife: number[][]
  retry: [number, number][]
  unc: [number, number][]
}

type Overview = {
  adv_key: string
  adv_modifiable: boolean
  adv_modified: boolean
  adv_progress: string
  adv_scheduled: boolean
  adv_section: string
  adv_status: string
  adv_test_code: string
  below_remain_life_mail_notify_thr: boolean
  below_remain_life_show_thr: boolean
  below_remain_life_thr: boolean
  compatibility: string
  disk_code: string
  disk_error_reset_fail_status: string
  disk_error_timeout_status: string
  disk_error_unc_status: string
  idnf: number
  // biome-ignore lint/suspicious/noExplicitAny: needed
  ihm_schedule_list: any[]
  isNVMeDisk: boolean
  isSataDisk: boolean
  isSsd: boolean
  isSynoDrive: boolean
  is_bundle_ssd: boolean
  low_performance_in_raid: string
  low_performance_in_raid_disk_list: string
  overview_status: string
  overview_weight: number
  poweron: string
  read_only: boolean
  remain_life: number
  remain_life_attr: string
  remain_life_danger: boolean
  remain_life_disable: number
  remain_life_suppress: number
  retry: number
  sb_days_left: number
  sb_days_left_critical: boolean
  sb_days_left_warning: boolean
  scheduled: boolean
  seq_status: string
  smart: string
  smartInfo_support: number
  smart_disable: number
  // biome-ignore lint/suspicious/noExplicitAny: needed
  smart_fail: any[]
  smart_fail_critical: boolean
  smart_fail_past: boolean
  smart_fail_repeat: boolean
  smart_info: string
  smart_progress: string
  smart_schedule_list: {
    next_trigger_time: string
  }[]
  smart_suppress: number
  smart_test: string
  smart_test_disable: number
  smart_test_limit: number
  smart_test_suppress: number
  ssd_bad_block_over_thr: boolean
  unc: number
  wdda_disable: number
  wdda_modifiable: boolean
  wdda_status: string
  wdda_suppress: number
}

type SmartAttribute = {
  current: string
  id: string
  name: string
  raw: string
  status: string
  threshold: string
  worst: string
}
