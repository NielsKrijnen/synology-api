export type APIResponse<T extends Record<string, any>> = {
  data: T
  success: true
} | {
  error: {}
  success: false
}