import { makeControllerGetAllFilms, makeControllerCreateFilms, makeControllerGetOneFilms } from '@/main/factories'
import { adaptRouteFilmsAll, adaptRoute, adaptRouteId } from '@/main/adpters'

import { Router } from 'express'

export default (router: Router):void => {
    router.get("/films", adaptRouteFilmsAll(makeControllerGetAllFilms())),
    router.get('/films/:id', adaptRouteId(makeControllerGetOneFilms())),
    router.get('/create', adaptRoute(makeControllerCreateFilms()))
}