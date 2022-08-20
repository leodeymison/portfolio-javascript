import Films from '@/infra/mongo/schemas/Films'
import Connect from '@/infra/mongo/config'
import { DBModel } from '@/infra/adapter/interfaces'

export class AdapterMongoose implements DBModel{
    Connect(){
        try {
            Connect()
        } catch (error) {
            return {
                ...error,
                message: `Error connecting to database`
            }
        }
    }
    async findAll(page:number, limit:number){
        try {
            if(page){
                const skip = limit * (page - 1)
                const allRegisters = (await Films.find()).length
                const res = allRegisters / limit
                const cont = (allRegisters / limit) > parseInt(res.toFixed(0)) ? parseInt(res.toFixed(0)) + 1 : res
                return {
                    cont: cont,
                    page: page,
                    data: await Films.find().skip(skip).limit(limit)
                }
            } else {
                return await Films.find()
            }
        } catch (error) {
            return {
                ...error,
                message: 'Page cannot be less than 1'
            }
        }
    }
    async findOne(id: string) {
        try {
            return await Films.findById(id)
        } catch (error) {
            return {
                ...error,
                message: `id ${id} not found`
            }
        }
    }
    async deleteAll(){
        try {
            return await Films.deleteMany({})
        } catch (error) {
            return {
                ...error,
                message: `server error`
            }
        }
    }
    async createMany<T = any>(data: Array<T>): Promise<any>{
        try {
            return data.map(async (item) => (
                await Films.create(item)
            )) 
        } catch (error) {
            return {
                ...error,
                message: `server error`
            }
        }
    }
}