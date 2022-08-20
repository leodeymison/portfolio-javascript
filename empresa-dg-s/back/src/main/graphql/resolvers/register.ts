import { RegisterScore } from '@/domain/entities'
import { adaptResolver, adaptResolverSave } from '@/main/adapters'
import { makeControllerRegisterLoad, makeControllerRegisterSave } from '@/main/factories'

export default {
  Query: {
    Registers: async () => adaptResolver(makeControllerRegisterLoad())
  },
  Mutation: {
    Registers: async (obj: any, args: {data: RegisterScore}) => adaptResolverSave(makeControllerRegisterSave(), args.data)
  }
}
