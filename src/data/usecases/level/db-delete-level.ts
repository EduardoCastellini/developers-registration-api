import { DeleteLevel } from '../../../domain/usecases'
import { DeleteLevelRepository, LoadDeveloperByLevelIdRepository } from '../../protocols'
import { AlreadyUsedError } from '../../errors'

export class DbDeleteLevel implements DeleteLevel {
  constructor (
    private readonly deleteLevelRepository: DeleteLevelRepository,
    private readonly LoadDeveloperByLevelIdRepository: LoadDeveloperByLevelIdRepository
  ) {}

  async delete (levelId: string): Promise<void> {
    const developer = await this.LoadDeveloperByLevelIdRepository.loadByLevelId(levelId)

    if (developer) throw new AlreadyUsedError('Nível')

    await this.deleteLevelRepository.delete(levelId)
  }
}
