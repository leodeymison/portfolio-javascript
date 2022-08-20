import { RegisterScore } from '@/domain/entities'

export interface RegisterSave {
  save: (data: Object) => Promise<RegisterScore>
}
