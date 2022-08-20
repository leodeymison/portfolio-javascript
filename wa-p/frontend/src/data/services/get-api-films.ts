import { MessageScore } from '@/domain/entities'
import { GetFilmsAPI } from "@/domain/usecases";
import { FilmsRepository } from '@/data/contracts'

export class GetApiFilmsService implements GetFilmsAPI {
    constructor (private readonly FilmsRepository: FilmsRepository) {}
    
    async GetApi(): Promise<MessageScore> {
        return this.FilmsRepository.loadFilmsAPI()
    }
}