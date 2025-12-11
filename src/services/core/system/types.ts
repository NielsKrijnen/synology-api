export type SystemInfo = {
  cpu_clock_speed: number
  cpu_cores: string
  cpu_family: string
  cpu_series: string
  cpu_vendor: string
  enabled_ntp: boolean
  external_pci_slot_info: unknown[]
  firmware_date: string
  firmware_ver: string
  model: string
  ntp_server: string
  ram_size: number
  sata_dev: unknown[]
  serial: string
  support_esata: string
  sys_temp: number
  sys_tempwarn: boolean
  systempwarn: boolean
  temperature_warning: boolean
  time: string
  time_zone: string
  time_zone_desc: string
  up_time: string
  usb_dev: unknown[]
}

export type SystemNetwork = {
  dns: string
  enabled_domain: boolean
  enabled_samba: boolean
  gateway: string
  hostname: string
  nif: {
    addr: string
    duplex: boolean
    id: string
    ipv6: {
      addr: string
      prefix_len: number
      scope: string
    }[]
    mac: string
    mask: string
    mtu: number
    speed: number
    status: string
    type: string
    use_dhcp: boolean
  }[]
  wins: string
  workgroup: string
}

export type SystemVolume = {
  hdd_info: {
    action: {
      alert: boolean
      notification: boolean
      selectable: boolean
      show_lifetime_chart: boolean
    }
    adv_progress: string
    adv_status: string
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
    model: string
    name: string
    num_id: number
    order: number
    overview_status: string
    pciSlot: number
    perf_testing: boolean
    portType: string
    remain_life: number
    remain_life_danger: boolean
    remote_info: {
      compatibility: string
      unc: number
    }
    sb_days_left: number
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
  vol_info: {
    desc: string
    inode_free: string
    inode_total: string
    name: string
    status: string
    total_size: string
    used_size: string
    vol_desc: string
    volume: string
  }[]
}

export type SystemUtilization = {
  cpu: {
    "15min_load": number
    "1min_load": number
    "5min_load": number
    device: string
    other_load: number
    system_load: number
    user_load: number
  }
  disk: {
    disk: {
      device: string
      display_name: string
      read_access: number
      read_byte: number
      type: string
      utilization: number
      write_access: number
      write_byte: number
    }[]
    total: {
      device: string
      read_access: number
      read_byte: number
      utilization: number
      write_access: number
      write_byte: number
    }
  }
  lun: unknown[]
  memory: {
    avail_real: number
    avail_swap: number
    buffer: number
    cached: number
    device: string
    memory_size: number
    real_usage: number
    si_disk: number
    so_disk: number
    swap_usage: number
    total_real: number
    total_swap: number
  }
  network: {
    device: string
    rx: number
    tx: number
  }[]
  nfs: unknown[]
  space: {
    total: {
      device: string
      read_access: number
      read_byte: number
      utilization: number
      write_access: number
      write_byte: number
    }
    volume: {
      device: string
      display_name: string
      read_access: number
      read_byte: number
      utilization: number
      write_access: number
      write_byte: number
    }[]
  }
  time: number
}

export type SystemHealth = {
  hostname: string
  interfaces: {
    id: string
    ip: string
    type: string
  }[]
  rule: {
    description: {
      description_format: string
      description_params: string[]
      description_use_formatted: boolean
    }
    id: string
    priority: number
    type: number
  }
  uptime: string
}

export type SystemProcess = {
  process: {
    command: string
    cpu: number
    mem: number
    mem_shared: number
    pid: number
    status: string
  }[]
}
