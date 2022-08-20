import { RegisterScore } from '@/domain/entities'
import { RegisterSave } from '@/domain/usecases'
import { RegisterRepository } from '@/data/contracts'

export class RegistorSaveService implements RegisterSave {
  constructor (private readonly RegisterSaveRepository: RegisterRepository) {}
  async save (data: RegisterScore): Promise<RegisterScore> {
    return await this.RegisterSaveRepository.saveRegister(data)
  }
}
