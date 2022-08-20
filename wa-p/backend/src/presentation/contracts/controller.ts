import { HTTpResponse } from '@/presentation/contracts'

export interface controller {
    handle: (data?: any) => Promise<HTTpResponse>
}