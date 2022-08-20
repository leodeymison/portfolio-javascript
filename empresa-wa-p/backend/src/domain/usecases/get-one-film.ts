import { GetFilmsScore } from '@/domain/entities'

export interface GetOneFilms {
    GetOne: (id: string) => Promise<GetFilmsScore>
}