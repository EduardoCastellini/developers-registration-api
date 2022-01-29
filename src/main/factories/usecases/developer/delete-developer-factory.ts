import { DbDeleteDeveloper } from '../../../../data/usecases'
import { DeleteDeveloper } from '../../../../domain/usecases'
import { DeveloperMongoRepository } from '../../../../infra/db'

export const makeDbDeleteDeveloper = (): DeleteDeveloper => {
  const developerMongoRepository = new DeveloperMongoRepository()
  return new DbDeleteDeveloper(developerMongoRepository)
}
