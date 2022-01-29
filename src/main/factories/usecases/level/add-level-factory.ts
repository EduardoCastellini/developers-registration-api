import { DbAddLevel } from '../../../../data/usecases'
import { AddLevel } from '../../../../domain/usecases'
import { LevelMongoRepository } from '../../../../infra/db'

export const makeDbAddLevel = (): AddLevel => {
  const levelMongoRepository = new LevelMongoRepository()
  return new DbAddLevel(levelMongoRepository)
}
