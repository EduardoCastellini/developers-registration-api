import { LoadDeveloper } from '../../../domain/usecases'
import { LoadDeveloperRepository } from '../../protocols'

export class DbLoadDeveloper implements LoadDeveloper {
  constructor (private readonly loadDeveloperRepository: LoadDeveloperRepository) {}

  async load (level?: string): Promise<LoadDeveloperRepository.Result> {
    const developers = await this.loadDeveloperRepository.load(level)

    return developers
  }
}
