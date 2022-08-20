import { HTTpResponse } from '@/presentation/contracts'

export interface Controller {
  handle: (data?: object) => Promise<HTTpResponse>
}
