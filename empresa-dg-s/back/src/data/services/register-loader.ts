import { RegisterScore } from '@/domain/entities'
import { RegisterLoader } from '@/domain/usecases'
import { RegisterRepository } from '@/data/contracts'

export class RegisterLoaderService implements RegisterLoader {
  constructor (private readonly RegisterRepository: RegisterRepository) {}

  async load (): Promise<RegisterScore[]> {
    return this.RegisterRepository.loadRegister()
  }
}
