import { MessageScore } from "../entities/Message";

export interface GetFilmsAPI {
    GetApi: () => Promise<MessageScore>
}
