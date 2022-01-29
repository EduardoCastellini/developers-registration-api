
import { Controller, HttpResponse } from '../../protocols'
import { serverError, ok } from '../../helpers'
import { UpdateLevel } from '../../../domain/usecases'

export class UpdateLevelController implements Controller {
  constructor (
    private readonly updateLevel: UpdateLevel
  ) {}

  async handle (request: UpdateLevelController.Request): Promise<HttpResponse> {
    try {
      const levelId = request.params.levelId
      const dada = { ...request.body }
      const level = await this.updateLevel.update(levelId, dada)
      return ok(level)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace UpdateLevelController {
  export interface Request {
    params: {levelId: string}
    body: {nivel: string
    }
  }
}
