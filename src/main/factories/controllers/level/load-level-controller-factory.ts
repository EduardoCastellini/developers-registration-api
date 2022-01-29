
import { makeDbLoadLevel } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { LoadLevelController } from '../../../../app/controllers/level'

export const makeLoadLevelController = (): Controller => {
  const controller = new LoadLevelController(makeDbLoadLevel())
  return controller
}
