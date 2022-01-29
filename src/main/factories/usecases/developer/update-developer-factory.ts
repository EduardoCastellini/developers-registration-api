import { DbUpdateDeveloper } from '../../../../data/usecases'
import { UpdateDeveloper } from '../../../../domain/usecases'
import { DeveloperMongoRepository } from '../../../../infra/db'

export const makeDbUpdateDeveloper = (): UpdateDeveloper => {
  const developerMongoRepository = new DeveloperMongoRepository()
  return new DbUpdateDeveloper(developerMongoRepository)
}
