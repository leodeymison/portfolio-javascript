import { RegisterScore } from '@/domain/entities'
import { RegisterLoader, RegisterSave } from '@/domain/usecases'
import { Controller, HTTpResponse, ok, serverError } from '@/presentation/contracts'
import { RegisterScoreViewModel } from '@/presentation/view-models'
import { RegisterValidator } from '@/presentation/validations'

export class LoadRegisterController implements Controller {
  constructor (private readonly RegisterLoader: RegisterLoader) {}
  async handle (): Promise<HTTpResponse<RegisterScoreViewModel[]>> {
    try {
      const Registers = await this.RegisterLoader.load()
      return ok<RegisterScoreViewModel[]>(RegisterScoreViewModel.mapCollention(Registers))
    } catch (err) {
      return serverError(err, 500)
    }
  }
}

export class SaveRegisterController implements Controller {
  constructor (private readonly RegisterSave: RegisterSave) {}
  async handle (data: RegisterScore): Promise<HTTpResponse<RegisterScoreViewModel>> {
    try {
      await RegisterValidator.Params(data)
      const Register = await this.RegisterSave.save(data)
      const responde = ok<RegisterScoreViewModel>(RegisterScoreViewModel.map(Register))
      return responde
    } catch (err) {
      return serverError(err, 400)
    }
  }
}
