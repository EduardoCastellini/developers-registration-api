import { AddDeveloper } from '../../../domain/usecases'
import { AddDeveloperRepository } from '../../protocols'

export class DbAddDeveloper implements AddDeveloper {
  constructor (private readonly addDeveloperRepository: AddDeveloperRepository) {}

  async add (data: AddDeveloperRepository.Params): Promise<void> {
    await this.addDeveloperRepository.add(data)
  }
}
