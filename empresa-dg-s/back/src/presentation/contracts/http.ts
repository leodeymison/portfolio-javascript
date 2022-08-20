export type HTTpResponse<T = any> = {
  statusCode: number
  data: T
}

export const serverError = (error: Error, status: number): HTTpResponse => ({
  statusCode: status,
  data: error.message
})

export const ok = <T = any>(data: T): HTTpResponse => ({
  statusCode: 200,
  data
})
