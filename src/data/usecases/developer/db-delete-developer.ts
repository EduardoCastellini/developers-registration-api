import { DeleteDeveloper } from '../../../domain/usecases'
import { DeleteDeveloperRepository } from '../../protocols'

export class DbDeleteDeveloper implements DeleteDeveloper {
  constructor (private readonly deleteDeveloperRepository: DeleteDeveloperRepository) {}

  async delete (developerId: string): Promise<void> {
    await this.deleteDeveloperRepository.delete(developerId)
  }
}
