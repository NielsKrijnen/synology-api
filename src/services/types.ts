export type APIResponse<T> = {
  data: T
  success: true
} | {
  error: {}
  success: false
}