
import { Controller, HttpResponse } from '../../protocols'
import { serverError, ok } from '../../helpers'
import { UpdateDeveloper } from '../../../domain/usecases'

export class UpdateDeveloperController implements Controller {
  constructor (
    private readonly updateDeveloper: UpdateDeveloper
  ) {}

  async handle (request: UpdateDeveloperController.Request): Promise<HttpResponse> {
    try {
      const developerId = request.params.developerId
      const data = { ...request.body }
      const developer = await this.updateDeveloper.update(developerId, data)
      return ok(developer)
    } catch (error) {
      console.log('error: ', error)
      return serverError(error)
    }
  }
}

export namespace UpdateDeveloperController {
  export interface Request {
    params: {developerId: string}
    body: {
      nome: string
      sexo: string
      hobby: string
      idade: number
      datanascimento: Date
      nivelid: string
    }
  }
}
