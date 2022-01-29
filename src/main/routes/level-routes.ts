import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeAddLevelController, makeLoadLevelController, makeUpdateLevelController, makeDeleteLevelController } from '../factories/controllers'

export default (router: Router): void => {
  router.post('/levels', adaptRoute(makeAddLevelController()))
  router.get('/levels', adaptRoute(makeLoadLevelController()))
  router.get('/levels/:levelId', adaptRoute(makeLoadLevelController()))
  router.put('/levels/:levelId', adaptRoute(makeUpdateLevelController()))
  router.delete('/levels/:levelId', adaptRoute(makeDeleteLevelController()))
}
