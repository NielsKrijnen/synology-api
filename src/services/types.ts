export type APIResponse<T> =
  | {
      data: T
      success: true
    }
  | {
      error: Record<string, never>
      success: false
    }
