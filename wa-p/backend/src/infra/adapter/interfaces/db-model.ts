export interface DBModel {
    Connect: () => void
    findAll: (page:number, limit:number) => Promise<Array<any> | {cont: number, page: number, data: Array<any>}>
    findOne: (id: string) => Promise<Object>
    deleteAll: () => Promise<any>
    createMany: <T>(data: Array<T>) => Promise<any> 
}
