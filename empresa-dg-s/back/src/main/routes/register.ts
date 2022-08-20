import { adaptRouteArgs, adaptRoute } from '@/main/adapters'
import { makeControllerRegisterSave, makeControllerRegisterLoad } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/registers', adaptRoute(makeControllerRegisterLoad()))
  router.post('/registers', adaptRouteArgs(makeControllerRegisterSave()))
}
