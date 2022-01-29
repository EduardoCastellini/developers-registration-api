import { DbDeleteLevel } from '../../../../data/usecases'
import { LevelMongoRepository, DeveloperMongoRepository } from '../../../../infra/db'

export const makeDbDeleteLevel = (): DbDeleteLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  const developerMongoRepository = new DeveloperMongoRepository()
  return new DbDeleteLevel(levelMongoRepository, developerMongoRepository)
}
