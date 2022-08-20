import { adaptResolverFilmsAll, adaptResolverId, adaptResolver } from '@/main/adpters'
import { makeControllerGetAllFilms, makeControllerCreateFilms, makeControllerGetOneFilms } from '@/main/factories'

export default {
  Query: {
    FilmsAll: async (obj:any, args: {page:number}) => adaptResolverFilmsAll(makeControllerGetAllFilms(), args.page),
    FilmsOne: async (obj:any, args: {id: string}) => adaptResolverId(makeControllerGetOneFilms(), args.id),
    FilmsCreate: async () => adaptResolver(makeControllerCreateFilms())
  },
}
