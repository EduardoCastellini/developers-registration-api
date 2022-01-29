import { DbAddLevel } from '../../../../data/usecases'
import { LevelMongoRepository } from '../../../../infra/db'

export const makeDbAddLevel = (): DbAddLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  return new DbAddLevel(levelMongoRepository)
}
