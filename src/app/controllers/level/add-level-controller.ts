
import { Controller, HttpResponse } from '../../protocols'
import { serverError, created } from '../../helpers'
import { AddLevel } from '../../../domain/usecases'

export class AddLevelController implements Controller {
  constructor (
    private readonly addLevel: AddLevel
  ) {}

  async handle (request: AddLevelController.Request): Promise<HttpResponse> {
    try {
      await this.addLevel.add({ ...request.body })
      return created({ message: 'Nível cadastrado com sucesso!' })
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddLevelController {
  export interface Request {
    body: {nivel: string
    }
  }
}
