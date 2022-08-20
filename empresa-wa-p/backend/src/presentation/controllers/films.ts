import { getFilmsModel, MessageModel, getFilmsContModel } from "@/data/models";
import { GetFilms, GetFilmsAPI, GetOneFilms } from "@/domain/usecases";
import { controller, HTTpResponse, ok, serverError } from "@/presentation/contracts";

export class getFilmsController implements controller {
    constructor(private readonly getFilms: GetFilms){}
    async handle(page: number): Promise<HTTpResponse<getFilmsContModel>> {
        try {
            const Films = await this.getFilms.Get(page)
            return ok<getFilmsContModel>(Films) 
        } catch (error) {
            return serverError(500, error)
        }
    }
}
export class getApiFilmsController implements controller {
    constructor(private readonly getFilmsApi: GetFilmsAPI){}
    async handle(): Promise<HTTpResponse<MessageModel>> {
        try {
            const Films =  await this.getFilmsApi.GetApi()
            return ok<MessageModel>(Films) 
        } catch (error) {
            return serverError(500, error)
        }
    }
}

export class getOneFilmsController implements controller {
    constructor(private readonly GetOneFilms: GetOneFilms){}
    async handle(id: string): Promise<HTTpResponse<getFilmsModel>> {
        try {
            const Films = await this.GetOneFilms.GetOne(id)
            return ok<getFilmsModel>(Films) 
        } catch (error) {
            return serverError(500, error)
        }
    }
}