
import { Controller, HttpResponse } from '../../protocols'
import { serverError, noContent } from '../../helpers'
import { DeleteDeveloper } from '../../../domain/usecases'

export class DeleteDeveloperController implements Controller {
  constructor (
    private readonly deleteDeveloper: DeleteDeveloper
  ) {}

  async handle (request: DeleteDeveloperController.Request): Promise<HttpResponse> {
    try {
      await this.deleteDeveloper.delete(request?.params?.developerId)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteDeveloperController {
  export interface Request {
    params: {developerId: string}
  }
}
