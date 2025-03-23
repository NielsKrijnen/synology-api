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
    additional: FileStationAdditional<A>
  }[]
  total: number
}

export type FileStationSortBy = "name" | "user" | "group" | "mtime" | "atime" | "ctime" | "crtime" | "posix"

export type FileStationSortDirection = "asc" | "desc"

export type FileStationSharesParams<A extends string[] = FileStationParamsAdditional[]> = {
  offset?: number
  limit?: number
  sort_by?: FileStationSortBy
  sort_direction?: FileStationSortDirection
  onlywritable?: boolean
  additional?: A
}

export type FileStationAdditional<A extends FileStationParamsAdditional[]> = A extends [] ? undefined : {
  [K in A[number]]:
    K extends "real_path" ? string :
    K extends "volume_status" ? {
      freespace: number
      readonly: boolean
      totalspace: number
    } :
    K extends "size" ? number :
    K extends "type" ? string :
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

export type FileStationParamsAdditional = "real_path" | "owner" | "time" | "perm" | "mount_point_type" | "sync_share" | "volume_status"

export type FileStationFiles<A extends FileStationParamsAdditional[] = []> = {
  files: {
    isdir: boolean
    name: string
    path: string
    additional: FileStationAdditional<A>
  }[]
  offset: number
  total: number
}

export type FileStationFilesParams<A extends string[] = FileStationParamsAdditional[]> = {
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
  sort_direction?: FileStationSortDirection
  /** Optional. Given glob pattern(s)
   to find files whose names and
   extensions match a case-insensitive glob pattern.
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
  filetype?: FileStationFiletype
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
  additional?: A
}

export type FileStationFile<A extends FileStationParamsAdditional[] = []> = Omit<FileStationFiles<A>, "offset" | "total">

export type FileStationFileParams<A extends string[] = FileStationParamsAdditional[]> = {
  path: string | string[]
  additional?: A
}

export type FileStationStartSearchParams = {
  /**  A searched folder path starting with a
   shared folder. One or more folder paths to
   be searched. */
  folder_path: string | string[]
  /**  Optional. If searching files within a folder
   and subfolders recursively or not. */
  recursive?: boolean
  /** Optional. Search for files whose names
   and extensions match a case-insensitive
   glob pattern.
   Note:
   1. If the pattern doesn't contain any glob
   syntax (? and *), * of glob syntax will be
   added at begin and end of the string
   automatically for partially matching the
   pattern.
   2. You can use " " to separate multiple
   glob patterns. */
  pattern?: string
  /**  Optional. Search for files whose
   extensions match a file type pattern in a
   case-insensitive glob pattern. If you give
   this criterion, folders aren't matched.
   Note: You can use commas "," to separate
   multiple glob patterns. */
  extension?: string
  /** Optional. "file": enumerate regular files;
   "dir": enumerate folders; "all" enumerate
   regular files and folders. */
  filetype?: FileStationFiletype
  /** Optional. Search for files whose sizes are
   greater than the given byte size. */
  size_from?: number
  /** Optional. Search for files whose sizes are
   less than the given byte size. */
  size_to?: number
  /**  Optional. Search for files whose last
   modified time after the given Linux
   timestamp in second. */
  mtime_from?: number
  /** Optional. Search for files whose last
   modified time before the given Linux
   timestamp in second. */
  mtime_to?: number
  /** Optional. Search for files whose create
   time after the given Linux timestamp in
   second. */
  crtime_from?: number
  /** Optional. Search for files whose create
   time before the given Linux timestamp in
   second. */
  crtime_to?: number
  /** Optional. Search for files whose last
   access time after the given Linux
   timestamp in second. */
  atime_from?: number
  /** Optional. Search for files whose last
   access time before the given Linux
   timestamp in second. */
  atime_to?: number
  /** Optional. Search for files whose username matches this criterion. This criterion
   is case-insensitive. */
  owner?: string
  /** Optional. Search for files whose group
   name matches this criterion. This criterion
   is case-insensitive. */
  group?: string
}

// TODO: Documentation
export type FileStationListSearch<A extends FileStationParamsAdditional[] = []> = {
  total: number
  offset: number
  finished: boolean
  files: FileStationFiles<A>["files"]
}

// TODO: Documentation
export type FileStationListSearchParams<A extends string[] = FileStationParamsAdditional[]> = {
  taskid: string
  offset?: number
  limit?: number
  sort_by?: FileStationSortBy | "type" | "size"
  sort_direction?: FileStationSortDirection
  pattern?: string
  filetype?: FileStationFiletype
  additional?: A
}

export type FileStationFiletype = "file" | "dir" | "all"

export type FileStationThumbnailParams = {
  /** A file path starting with a shared folder. */
  path: string
  /** Optional. Return different size
   thumbnail.
   Size Options:
   - **small**: small-size thumbnail.
   - **medium**: medium-size thumbnail.
   - **large**: large-size thumbnail.
   - **original**: original-size thumbnail. */
  size?: "small" | "medium" | "large" | "original"
  /** Optional. Return rotated thumbnail.
   Rotate Options:
   - 0: Do not rotate.
   - 1: Rotate 90°.
   - 2: Rotate 180°.
   - 3: Rotate 270°.
   - 4: Rotate 360°. */
  rotate?: 0 | 1 | 2 | 3 | 4
}