import { LoadLevel } from '../../../domain/usecases'
import { LoadLevelRepository } from '../../protocols'

export class DbLoadLevel implements LoadLevel {
  constructor (private readonly loadLevelRepository: LoadLevelRepository) {}

  async load (levelId?: string): Promise<LoadLevelRepository.Result> {
    const levels = await this.loadLevelRepository.load(levelId)

    return levels
  }
}
