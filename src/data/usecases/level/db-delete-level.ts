import { DeleteLevel } from '../../../domain/usecases'
import { DeleteLevelRepository, LoadDeveloperByLevelIdRepository } from '../../protocols'

export class DbDeleteLevel implements DeleteLevel {
  constructor (
    private readonly deleteLevelRepository: DeleteLevelRepository,
    private readonly LoadDeveloperByLevelIdRepository: LoadDeveloperByLevelIdRepository
  ) {}

  async delete (levelId: string): Promise<Error | undefined> {
    const developer = await this.LoadDeveloperByLevelIdRepository.loadByLevelId(levelId)
    console.log('delete delete developer: ', developer)
    if (!developer) return new Error()
    await this.deleteLevelRepository.delete(levelId)
  }
}
