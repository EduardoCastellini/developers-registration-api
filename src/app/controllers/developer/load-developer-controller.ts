
import { Controller, HttpResponse } from '../../protocols'
import { serverError, ok } from '../../helpers'
import { LoadDeveloper } from '../../../domain/usecases'

export class LoadDeveloperController implements Controller {
  constructor (
    private readonly loadDeveloper: LoadDeveloper
  ) {}

  async handle (request: LoadDeveloperController.Request): Promise<HttpResponse> {
    try {
      const developers = await this.loadDeveloper.load(request?.params?.developerId)
      return ok(developers)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadDeveloperController {
  export interface Request {
    params: {developerId?: string}
  }
}
