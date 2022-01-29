
import { makeDbAddDeveloper } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { AddDeveloperController } from '../../../../app/controllers/developer'

export const makeAddDeveloperController = (): Controller => {
  const controller = new AddDeveloperController(makeDbAddDeveloper())
  return controller
}
