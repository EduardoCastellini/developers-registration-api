
import { makeDbLoadDeveloper } from '../../usecases'
import { Controller } from '../../../../app/protocols'
import { LoadDeveloperController } from '../../../../app/controllers/developer'

export const makeLoadDeveloperController = (): Controller => {
  const controller = new LoadDeveloperController(makeDbLoadDeveloper())
  return controller
}
