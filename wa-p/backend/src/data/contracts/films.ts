import { getFilmsModel, MessageModel, getFilmsContModel } from '@/data/models'

export interface FilmsRepository {
  getFilms: (page: number) => Promise<getFilmsContModel>,
  loadFilmsAPI: () => Promise<MessageModel>,
  getOneFilms: (id: string) => Promise<getFilmsModel>
}