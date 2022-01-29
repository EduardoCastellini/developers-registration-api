
import { makeDbDeleteDeveloper } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { DeleteDeveloperController } from '../../../../app/controllers/developer'

export const makeDeleteDeveloperController = (): Controller => {
  const controller = new DeleteDeveloperController(makeDbDeleteDeveloper())
  return controller
}
