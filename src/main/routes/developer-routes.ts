import { adaptRoute } from '../adapters'
import { makeAddDeveloperController, makeLoadDeveloperController, makeUpdateDeveloperController } from '../factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/developers', adaptRoute(makeAddDeveloperController()))
  router.get('/developers', adaptRoute(makeLoadDeveloperController()))
  router.put('/developers/:developerId', adaptRoute(makeUpdateDeveloperController()))
}
