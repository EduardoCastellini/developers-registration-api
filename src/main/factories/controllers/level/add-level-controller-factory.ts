
import { makeDbAddLevel } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { AddLevelController } from '../../../../app/controllers/level'

export const makeAddLevelController = (): Controller => {
  const controller = new AddLevelController(makeDbAddLevel())
  return controller
}
