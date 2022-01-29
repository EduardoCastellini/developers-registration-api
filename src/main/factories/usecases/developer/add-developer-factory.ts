import { DbAddDeveloper } from '../../../../data/usecases'
import { AddDeveloper } from '../../../../domain/usecases'
import { DeveloperMongoRepository } from '../../../../infra/db'

export const makeDbAddDeveloper = (): AddDeveloper => {
  const developerMongoRepository = new DeveloperMongoRepository()
  return new DbAddDeveloper(developerMongoRepository)
}
