import { DbLoadLevel } from '../../../../data/usecases'
import { LoadLevel } from '../../../../domain/usecases'
import { LevelMongoRepository } from '../../../../infra/db'

export const makeDbLoadLevel = (): LoadLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  return new DbLoadLevel(levelMongoRepository)
}
