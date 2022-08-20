import { RegisterScoreModel } from '@/data/models'

export interface RegisterRepository {
  loadRegister: () => Promise<RegisterScoreModel[]>
  saveRegister: (data: Object) => Promise<RegisterScoreModel>
}
