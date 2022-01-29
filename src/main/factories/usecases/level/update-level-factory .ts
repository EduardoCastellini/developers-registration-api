import { DbUpdateLevel } from '../../../../data/usecases'
import { LevelMongoRepository } from '../../../../infra/db'

export const makeDbUpdateLevel = (): DbUpdateLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  return new DbUpdateLevel(levelMongoRepository)
}
