import { DBModel } from '@/infra/adapter/interfaces'

export class AdapterDb {
    constructor(private readonly database:DBModel){
        database.Connect()
    }
    async findAll(page: number){
        try {
            return this.database.findAll(page, 10)
        } catch (error) {
            return error
        }
    }
    async findOne(id: string){
        try {
            return this.database.findOne(id)
        } catch (error) {
            return error
        }
    }
    async deleteAll(){
        return this.database.deleteAll()
    }
    async createMany<T = any>(data: Array<T>): Promise<any>{
        return this.database.createMany<T>(data)
    }
}