import { RegisterScore } from '@/domain/entities'

export interface RegisterLoader {
  load: () => Promise<RegisterScore[]>
}
