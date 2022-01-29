import { DbLoadDeveloper } from '../../../../data/usecases'
import { LoadDeveloper } from '../../../../domain/usecases'
import { DeveloperMongoRepository } from '../../../../infra/db'

export const makeDbLoadDeveloper = (): LoadDeveloper => {
  const developerMongoRepository = new DeveloperMongoRepository()
  return new DbLoadDeveloper(developerMongoRepository)
}
