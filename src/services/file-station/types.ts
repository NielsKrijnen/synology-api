import { FileStation } from "./index";

export type FileStationInfo = {
  enable_list_usergrp: boolean
  enable_send_email_attachment: boolean
  enable_view_google: boolean
  enable_view_microsoft: boolean
  hostname: string
  is_manager: boolean
  items: { gid: number }[]
  support_file_request: boolean
  support_sharing: boolean
  support_vfs: boolean
  support_virtual: {
    enable_iso_mount: boolean
    enable_remote_mount: boolean
  }
  support_virtual_protocol: string[]
  system_codepage: string
  uid: number
}

export type FileStationShares<A extends FileStationParamsAdditional[] = []> = {
  offset: number
  shares: {
    hybridshare_cache_status: number
    hybridshare_pin_status: number
    isdir: boolean
    name: string
    path: string
    additional: A extends [] ? undefined : {
      [K in A[number]]:
        K extends "real_path" ? string :
        K extends "volume_status" ? {
          freespace: number
          readonly: boolean
          totalspace: number
        } :
        K extends "mount_point_type" ? string :
        K extends "owner" ? {
          gid: number
          group: string
          uid: number
          user: string
        } :
        K extends "perm" ? {
          acl: {
            append: boolean
            del: boolean
            exec: boolean
            read: boolean
            write: boolean
          }
          acl_enable: boolean
          adv_right: {
            disable_download: boolean
            disable_list: boolean
            disable_modify: boolean
          }
          is_acl_mode: boolean
          is_share_readonly: boolean
          /**  POSIX file permission, For example, 777 means owner, group or other has all permission; 764 means owner has all permission, group has read/write permission, other has read permission. */
          posix: number
          /** "RW": The shared folder is writable; "RO": the shared folder is read-only. */
          share_right: "RW" | "RO"
        } :
        K extends "sync_share" ? boolean :
        K extends "time" ? {
          /** Linux timestamp of last access in second. */
          atime: number
          /** Linux timestamp of create time in second. */
          crtime: number
          /** Linux timestamp of last change in second. */
          ctime: number
          /** Linux timestamp of last modification in second. */
          mtime: number
        } : undefined
    }
  }[]
  total: number
}

export type FileStationSortBy = "name" | "user" | "group" | "mtime" | "atime" | "ctime" | "crtime" | "posix"

export type FileStationSharesParams<A extends string[] = FileStationParamsAdditional[]> = {
  offset?: number
  limit?: number
  sort_by?: "name" | "user" | "group" | "mtime" | "atime" | "ctime" | "crtime" | "posix"
  sort_direction?: "asc" | "desc"
  onlywritable?: boolean
  additional?: A
}

export type FileStationParamsAdditional = "real_path" | "owner" | "time" | "perm" | "mount_point_type" | "sync_share" | "volume_status"

export type FileStationFiles = {

}

export type FileStationFilesParams = {
  /** A listed folder path starting with a shared folder. */
  folder_path: string
  /** Optional. Specify how many files are skipped before beginning to return listed files. */
  offset?: number
  /** Optional. Number of files requested. 0 indicates to list all files with a given folder. */
  limit?: number
  /** Optional. Specify which file
   information to sort on.
   Options include:
   name: file name.
   size: file size.
   user: file owner.
   group: file group.
   mtime: last modified time.
   atime: last access time.
   ctime: last change time.
   crtime: create time.
   posix: POSIX permission.
   type: file extension. */
  sort_by?: FileStationSortBy | "size" | "type"
  /** Optional. Specify to sort
   ascending or to sort
   descending.
   Options include:
   asc: sort ascending.
   desc: sort descending. */
  sort_direction?: "asc" | "desc"
  /** Optional. Given glob pattern(s)
   to find files whose names and
   extensions match a case
   insensitive glob pattern.
   Note:
   1. If the pattern doesn't
   contain any glob syntax (? and
   *), * of glob syntax will be
   added at begin and end of the
   string automatically for
   partially matching the pattern.
   2. You can use "," to separate
   multiple glob patterns.** */
  pattern?: string
  /** Optional. "file": only
   enumerate regular files; "dir":
   only enumerate folders; "all"
   enumerate regular files and
   folders. */
  filetype?: "file" | "dir" | "all"
  /** Optional. Folder path starting
   with a shared folder. Return all
   files and sub-folders within
   `folder_path` path until
   goto_path  path recursively.
   ***Note**: `goto_path` is only valid
   with parameter "additional"
   contains **real_path**. */
  goto_path?: string
  /** Optional. Additional requested
   file information separated by a
   comma "," and around the
   brackets. When an additional
   option is requested,
   responded objects will be
   provided in the specified
   additional option.
   Options include:
   - **real_path**: return a real path in volume.
   - **size**: return file byte size.
   - **owner**: return information about file owner including username, group name, UID and GID.
   - **time**: return information about time including last access time, last modified time, last change time and create time.
   - **perm**: return information about file permission.
   - **mount_point_type**: return a type of virtual file system of a mount point.
   - **type**: return a file extension. */
  additional?: FileStationParamsAdditional
}