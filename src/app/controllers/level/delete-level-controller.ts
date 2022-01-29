
import { Controller, HttpResponse } from '../../protocols'
import { serverError, noContent } from '../../helpers'
import { DeleteLevel } from '../../../domain/usecases'

export class DeleteLevelController implements Controller {
  constructor (
    private readonly deleteLevel: DeleteLevel
  ) {}

  async handle (request: DeleteLevelController.Request): Promise<HttpResponse> {
    try {
      const levelId = request?.params?.levelId

      await this.deleteLevel.delete(levelId)

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteLevelController {
  export interface Request {
    params: {levelId: string}
  }
}
