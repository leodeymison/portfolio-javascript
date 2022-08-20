import { RegisterRepository } from '@/data/contracts'
import { RegisterScoreModel } from '@/data/models'
import { ResisterTable } from '@/infra/db/models/RegisterModel'

export class RegisterResopitory implements RegisterRepository {
  async loadRegister (): Promise<RegisterScoreModel[]> {
    try {
      const dataRegister = await ResisterTable.findAll()
      const newDataRegister = dataRegister.map(item => ({
        name: item.nome,
        birth: item.nascimento
      }))
      return newDataRegister
    } catch (err) {
      return err
    }
  }

  async saveRegister (args: RegisterScoreModel): Promise<RegisterScoreModel> {
    try {
      const newRegister = await ResisterTable.create({
        nome: args.name,
        nascimento: args.birth
      })
      return {
        name: newRegister.nome,
        birth: newRegister.nascimento
      }
    } catch (err) {
      return err
    }
  }
}
