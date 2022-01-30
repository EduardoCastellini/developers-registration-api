import {DbLoadLevel} from '../../../src/data/usecases/level'
import {LoadLevelRepository} from '../../../src/data/protocols/db/level'
import { LoadLevel } from '../../../src/domain/usecases'

const makeFakeData = (): LoadLevel.Result => ({
  level: 'any_level',
  id: 'any_id'
})

const makeLoadLevelRepository = (): LoadLevelRepository => {
  class LoadLevelRepository implements LoadLevelRepository {
    async load (levelId?: string): Promise<LoadLevelRepository.Result> {
      return new Promise(resolve => resolve(makeFakeData()))
    }
  }
  return new LoadLevelRepository()
}

interface SutTypes {
  sut: DbLoadLevel
  loadLevelRepository: LoadLevelRepository
}

const makeSut = (): SutTypes => {
  const loadLevelRepository = makeLoadLevelRepository()
  const sut = new DbLoadLevel(loadLevelRepository)
  return {sut, loadLevelRepository}
}

describe("DbLoadLevel UseCase", () => {
  test('Should LoadLevelRepository return corrects values', async () => {
    const {sut} = makeSut()
    const level = await sut.load()
    expect(level).toEqual(makeFakeData())
  })
  test('Should call LoadLevelRepository with correct values', async() => {
    const { sut, loadLevelRepository } = makeSut()
    const loadLevelRepositorySpy = jest.spyOn(loadLevelRepository, 'load')
    sut.load('any-id')
    expect(loadLevelRepositorySpy).toHaveBeenCalledWith('any-id')
  })

  test('Should throws if LoadLevelRepository throws', async() => {
    const { sut, loadLevelRepository } = makeSut()
    jest.spyOn(loadLevelRepository, 'load').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.load('any-id')
    await expect(promise).rejects.toThrow()
  })
})