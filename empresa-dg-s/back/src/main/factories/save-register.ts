import { RegistorSaveService } from '@/data/services'
import { SaveRegisterController } from '@/presentation/controllers'
import { RegisterResopitory } from '@/infra/respositories'
import { Controller } from '@/presentation/contracts'

export const makeControllerRegisterSave = (): Controller => { // factory
  const repo = new RegisterResopitory()
  const loader = new RegistorSaveService(repo)
  return new SaveRegisterController(loader)
}
