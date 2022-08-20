import { GetFilmsScore, GetFilmsContScore } from "@/domain/entities";
import { GetFilms } from "@/domain/usecases";
import { FilmsRepository } from '@/data/contracts'

export class GetFilmsService implements GetFilms {
    constructor (private readonly FilmsRepository: FilmsRepository) {}
    
    async Get(page: number): Promise<GetFilmsScore[] | GetFilmsContScore> {
        try {
            return this.FilmsRepository.getFilms(page)
        } catch (error) {
            return error
        }
    }
    async GetOne(id: string): Promise<GetFilmsScore> {
        try {
            return this.FilmsRepository.getOneFilms(id)
        } catch (error) {
            return error
        }
    }
}