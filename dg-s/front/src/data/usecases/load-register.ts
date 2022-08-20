import { RegisterLoad } from '@/domain/usecases'
import { RegisterScore } from '@/domain/entities'
import { HttpClient } from '@/data/protocols'

export class LoadRegister implements RegisterLoad {
    constructor (
        private readonly url: string,
        private readonly httpClient: HttpClient<RegisterScore[]>
    ) {}
    async load(): Promise<RegisterScore[] | []> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        })
        return httpResponse.body || []
    }
}