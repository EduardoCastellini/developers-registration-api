
import { Controller, HttpResponse } from '../../protocols'
import { serverError, ok } from '../../helpers'
import { LoadLevel } from '../../../domain/usecases'

export class LoadLevelController implements Controller {
  constructor (
    private readonly loadLevel: LoadLevel
  ) {}

  async handle (request: LoadLevelController.Request): Promise<HttpResponse> {
    try {
      const levels = await this.loadLevel.load(request?.params?.levelId)
      return ok(levels)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadLevelController {
  export interface Request {
    params: {levelId?: string}
  }
}
