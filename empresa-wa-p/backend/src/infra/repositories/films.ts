import { getFilmsModel, MessageModel, getFilmsContModel } from '@/data/models'
import { FilmsRepository } from '@/data/contracts'
import { AxiosHttpClient } from '@/infra/http-client'
import { AdapterDb } from '@/infra/adapter'
import { AdapterMongoose } from '@/infra/adapter/modules'


export class GetFilmsRepository implements FilmsRepository {
    private async configDB(): Promise<AdapterDb>{
        return new AdapterDb(new AdapterMongoose())
    }
    async getFilms(page: number): Promise<getFilmsContModel> {
        try {
            const allFilms = await (await this.configDB()).findAll(page)
            return allFilms
        } catch (error) {
            console.log(error)
        }
    }
    async loadFilmsAPI(): Promise<MessageModel> {
        try {
            (await this.configDB()).deleteAll();
            
            const filmsAPI = await new AxiosHttpClient().request({
                url: process.env.API_FILMS,
                method: 'get'
            });

            (await this.configDB()).createMany(filmsAPI.body)
            return {
                message: 'ok'
            }
        } catch (error) {
            return error
        }
    }
    async getOneFilms(id: string): Promise<getFilmsModel> {
        try {
            const allFilms = await (await this.configDB()).findOne(id)
            return allFilms
        } catch (error) {
            console.log(error)
        }
    }
}