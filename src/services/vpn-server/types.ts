export type VPNServerConfig = {
  l2tp: {
    auth_conn: number
    auth_type: number
    con_count: number
    dns: string
    dns_check: boolean
    kernel_mode: boolean
    mtu: number
    preshared_key: string
    serv_cli_begin: string
    serv_cli_end: string
    serv_enable: boolean
    serv_ip: string
    serv_range: number
    serv_run: boolean
    serv_type: number
    sha2_truncbug: boolean
  }
  openvpn: {
    auth_conn: number
    authentication: string
    comp_enable: number
    con_count: number
    enable_ipv6_server: number
    encryption: string
    ipv6_prefix: string
    mssfix_value: number
    no_inter_cert: boolean
    port: number
    protocol: string
    push_route_enable: number
    serv_enable: boolean
    serv_ip: string
    serv_range: number
    serv_run: boolean
    serv_type: number
    tls_auth_key: number
    user_conf: boolean
    verify_server_cn: number
  }
  pkg: {
    active: boolean
    ifs: string
    version: string
  }
  pptp: {
    auth_conn: number
    auth_type: number
    con_count: number
    dns: string
    dns_check: boolean
    mppe_type: number
    mtu: number
    serv_cli_begin: string
    serv_cli_end: string
    serv_enable: boolean
    serv_ip: string
    serv_range: number
    serv_run: boolean
    serv_type: number
  }
}

export type VPNServerConnections = {
  items: unknown[]
  total: number
}