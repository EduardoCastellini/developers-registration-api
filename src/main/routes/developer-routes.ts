import { adaptRoute } from '../adapters'
import { makeAddDeveloperController, makeLoadDeveloperController, makeUpdateDeveloperController, makeDeleteDeveloperController } from '../factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/developers', adaptRoute(makeAddDeveloperController()))
  router.get('/developers', adaptRoute(makeLoadDeveloperController()))
  router.get('/developers/:developerId', adaptRoute(makeLoadDeveloperController()))
  router.put('/developers/:developerId', adaptRoute(makeUpdateDeveloperController()))
  router.delete('/developers/:developerId', adaptRoute(makeDeleteDeveloperController()))
}
