
import { makeDbDeleteLevel } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { DeleteLevelController } from '../../../../app/controllers/level'

export const makeDeleteLevelController = (): Controller => {
  const controller = new DeleteLevelController(makeDbDeleteLevel())
  return controller
}
