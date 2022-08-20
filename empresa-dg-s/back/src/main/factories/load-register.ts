import { RegisterLoaderService } from '@/data/services'
import { LoadRegisterController } from '@/presentation/controllers'
import { RegisterResopitory } from '@/infra/respositories'
import { Controller } from '@/presentation/contracts'

export const makeControllerRegisterLoad = (): Controller => { // factory
  const repo = new RegisterResopitory()
  const loader = new RegisterLoaderService(repo)
  return new LoadRegisterController(loader)
}
