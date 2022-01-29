import { DbUpdateLevel } from '../../../../data/usecases'
import { UpdateLevel } from '../../../../domain/usecases'
import { LevelMongoRepository } from '../../../../infra/db'

export const makeDbUpdateLevel = (): UpdateLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  return new DbUpdateLevel(levelMongoRepository)
}
