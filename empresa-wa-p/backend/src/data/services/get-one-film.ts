import { GetFilmsScore } from "@/domain/entities";
import { GetOneFilms } from "@/domain/usecases";
import { FilmsRepository } from '@/data/contracts'

export class GetOneFilmsService implements GetOneFilms {
    constructor (private readonly FilmsRepository: FilmsRepository) {}

    async GetOne(id: string): Promise<GetFilmsScore> {
        return this.FilmsRepository.getOneFilms(id)
    }
}