import { UpdateLevel } from '../../../domain/usecases'
import { LevelModel } from '../../../domain/models'
import { UpdateLevelRepository } from '../../protocols'

export class DbUpdateLevel implements UpdateLevel {
  constructor (private readonly updateLevelRepository: UpdateLevelRepository) {}

  async update (levelId: string, data: UpdateLevel.Params): Promise<LevelModel | null> {
    const level = await this.updateLevelRepository.update(levelId, data)
    return level
  }
}
