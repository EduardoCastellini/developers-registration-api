
import { makeDbUpdateLevel } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { UpdateLevelController } from '../../../../app/controllers/level'

export const makeUpdateLevelController = (): Controller => {
  const controller = new UpdateLevelController(makeDbUpdateLevel())
  return controller
}
