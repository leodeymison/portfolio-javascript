import { RegisterScore } from "@/domain/entities";

export interface RegisterLoad {
    load: () => Promise<RegisterScore[]>
}