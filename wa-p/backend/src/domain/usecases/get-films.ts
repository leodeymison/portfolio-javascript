import { GetFilmsContScore, GetFilmsScore } from '@/domain/entities'

export interface GetFilms {
    Get: (page: number) => Promise<GetFilmsScore[] | GetFilmsContScore>
}