
import { Controller, HttpResponse } from '../../protocols'
import { serverError, created } from '../../helpers'
import { AddDeveloper } from '../../../domain/usecases'

export class AddDeveloperController implements Controller {
  constructor (
    private readonly addDeveloper: AddDeveloper
  ) {}

  async handle (request: AddDeveloperController.Request): Promise<HttpResponse> {
    try {
      await this.addDeveloper.add({ ...request.body, datanascimento: new Date(request.body.datanascimento) })
      return created({ message: 'Desenvolvedor cadastrado com sucesso!' })
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddDeveloperController {
  export interface Request {
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
