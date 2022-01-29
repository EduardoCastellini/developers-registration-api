import { DbDeleteLevel } from '../../../../data/usecases'
import { DeleteLevel } from '../../../../domain/usecases'
import { LevelMongoRepository, DeveloperMongoRepository } from '../../../../infra/db'

export const makeDbDeleteLevel = (): DeleteLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  const developerMongoRepository = new DeveloperMongoRepository()
  return new DbDeleteLevel(levelMongoRepository, developerMongoRepository)
}
