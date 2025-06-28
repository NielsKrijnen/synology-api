export type StorageInfo = {
  detected_pools: unknown[]
  disks: {
    action: {
      alert: boolean
      notification: boolean
      selectable: boolean
      show_lifetime_chart: boolean
    }
    action_status: {
      action_name: string
      action_progress: string
    }
    action_status_category: string
    action_status_key: string
    adv_progress: string
    adv_status: string
    allocation_role: string
    below_remain_life_mail_notify_thr: boolean
    below_remain_life_show_thr: boolean
    below_remain_life_thr: boolean
    compatibility: string
    container: {
      order: number
      str: string
      supportPwrBtnDisable: boolean
      type: string
    }
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
    remain_life: {
      trustable: boolean
      value: number
    }
    remain_life_danger: boolean
    remote_info: {
      compatibility: string
      unc: number
    }
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
  }[]
  env: {
    batchtask: {
      max_task: number
      remain_task: number
    }
    bay_number: string
    cache_max_ssd_num: number
    data_scrubbing: {
      sche_enabled: string
      sche_pool_order: string[]
      sche_status: string
    }
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
    space_size_limit: {
      allocatable_size: number
      is_limited: boolean
      size_limit: number
    }
    status: {
      root_size_byte: number
      system_crashed: boolean
      system_need_repair: boolean
      system_rebuilding: boolean
    }
    storageMachineInfo: {
      isInternal: boolean
      isSAS: boolean
      machineSerial: string
      machineStatus: string
      modelName: string
      nameStr: string
      order: number
      ports: unknown[]
    }[]
    support: {
      ebox: boolean
      raid_cross: boolean
      sysdef: boolean
    }
    support_volume_encryption: boolean
    unique_key: string
  }
  missing_pools: unknown[]
  overview_data: {
    incompatible_eunit: unknown[]
    pools_to_show: {
      detected_pool: unknown[]
      storage_pool: unknown[]
    }
    sample_level_str: {
      attention: string
      danger: string
      normal: string
    }
    space_affect_by_eunit_lost: boolean
    space_affect_by_location_mismatch: boolean
    status_level: string
  }
  ports: unknown[]
  storagePools: {
    cacheStatus: string
    cache_disks: unknown[]
    can_assemble: boolean
    can_do: {
      convert_shr_to_pool: number
      delete: boolean
      disk_replace: boolean
      expand_by_disk: number
      migrate: {
        to_shr2: number
      }
    }
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
    progress: {
      cur_step: number
      is_resync_speed_limited: boolean
      percent: string
      remaining_time: number
      step: string
      total_step: number
    }
    raidType: string
    raids: {
      designedDiskCount: number
      devices: {
        id: string
        slot: number
        status: string
      }[]
      hasParity: boolean
      minDevSize: string
      normalDevCount: number
      raidCrashedReason: number
      raidPath: string
      raidStatus: number
      spares: unknown[]
    }[]
    repair_action: string
    scrubbingStatus: string
    show_assemble_btn: boolean
    size: {
      total: string
      used: string
    }
    space_path: string
    space_status: {
      detail: string
      show_attention: boolean
      show_danger: boolean
      show_flag_detail: string
      status: string
      summary_status: string
    }
    spares: unknown[]
    ssd_trim: {
      support: string
    }
    status: string
    suggestions: unknown[]
    summary_status: string
    timebackup: boolean
    uuid: string
    vol_desc: string
    vspace_can_do: {
      drbd: {
        resize: {
          can_do: boolean
          errCode: number
          stopService: boolean
        }
      }
      flashcache: {
        apply: {
          can_do: boolean
          errCode: number
          stopService: boolean
        }
        remove: {
          can_do: boolean
          errCode: number
          stopService: boolean
        }
        resize: {
          can_do: boolean
          errCode: number
          stopService: boolean
        }
      }
      snapshot: {
        resize: {
          can_do: boolean
          errCode: number
          stopService: boolean
        }
      }
    }
  }[]
  volumes: {
    atime_checked: boolean
    atime_opt: string
    cacheStatus: string
    cache_advisor_running: boolean
    cache_disks: unknown[]
    dan_assemble: boolean
    can_do: {
      convert_shr_to_pool: number
      delete: boolean
      disk_replace: boolean
      expand_by_disk: number
      migrate: {
        to_shr2: number
      }
    }
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
    // TODO: Finish
  }[]
}