import { GetApiFilmsService, GetFilmsService, GetOneFilmsService } from "@/data/services";
import { GetFilmsRepository } from "@/infra/repositories";
import { controller } from "@/presentation/contracts";
import { getApiFilmsController, getFilmsController, getOneFilmsController } from "@/presentation/controllers";

export const makeControllerGetAllFilms = (): controller => {
    /* @/data/factory */
    const repo = new GetFilmsRepository()
    const loader = new GetFilmsService(repo)
    return new getFilmsController(loader)
};

export const makeControllerGetOneFilms = (): controller => {
    /* @/data/factory */
    const repo = new GetFilmsRepository()
    const loader = new GetOneFilmsService(repo)
    return new getOneFilmsController(loader)
};

export const makeControllerCreateFilms = (): controller => {
    /* @/data/factory */
    const repo = new GetFilmsRepository()
    const loader = new GetApiFilmsService(repo)
    return new getApiFilmsController(loader)
};