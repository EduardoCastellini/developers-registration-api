import { UpdateDeveloper } from '../../../domain/usecases'
import { UpdateDeveloperRepository } from '../../protocols'

export class DbUpdateDeveloper implements UpdateDeveloper {
  constructor (private readonly updateDeveloperRepository: UpdateDeveloperRepository) {}

  async update (developerId: string, data: UpdateDeveloper.Params): Promise<any> {
    const developer = await this.updateDeveloperRepository.update(developerId, data)
    return developer
  }
}
