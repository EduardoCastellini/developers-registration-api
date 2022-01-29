
import { makeDbUpdateDeveloper } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { UpdateDeveloperController } from '../../../../app/controllers/developer'

export const makeUpdateDeveloperController = (): Controller => {
  const controller = new UpdateDeveloperController(makeDbUpdateDeveloper())
  return controller
}
