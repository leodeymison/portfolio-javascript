import { RegisterScore } from '@/domain/entities'
import { dateFactory } from '@/presentation/factory'

export class RegisterScoreViewModel {
  name: string
  age: number

  static map (entity: RegisterScore): RegisterScoreViewModel {
    return {
      name: entity.name,
      age: dateFactory(entity.birth)
    }
  }

  static mapCollention (entities: RegisterScore[]): RegisterScoreViewModel[] {
    return entities.map(entity => RegisterScoreViewModel.map(entity))
  }
}
