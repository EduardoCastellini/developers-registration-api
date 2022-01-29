import { LoadDeveloper } from '../../../domain/usecases'
import { LoadDeveloperRepository } from '../../protocols'

export class DbLoadDeveloper implements LoadDeveloper {
  constructor (private readonly loadDeveloperRepository: LoadDeveloperRepository) {}

  async load (developerId?: string): Promise<LoadDeveloperRepository.Result> {
    const developers = await this.loadDeveloperRepository.load(developerId)

    return developers
  }
}
