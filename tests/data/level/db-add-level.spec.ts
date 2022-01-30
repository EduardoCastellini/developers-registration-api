import {DbAddLevel} from '../../../src/data/usecases/level'
import {AddLevelRepository} from '../../../src/data/protocols/db/level'
import { AddLevel } from '../../../src/domain/usecases'

const makeAddLevelRepository = (): AddLevelRepository => {
  class AddLevelRepository implements AddLevelRepository {
    async add (data: AddLevel.Params): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddLevelRepository()
}

interface SutTypes {
  sut: DbAddLevel
  addLevelRepository: AddLevelRepository
}

const makeSut = (): SutTypes => {
  const addLevelRepository = makeAddLevelRepository()
  const sut = new DbAddLevel(addLevelRepository)
  return {sut, addLevelRepository}
}

describe("DbAddLevel UseCase", () => {
  test('Should call AddLevelRepository with correct values', async() => {
    const { sut, addLevelRepository } = makeSut()
    const addLevelRepositorySpy = jest.spyOn(addLevelRepository, 'add')
    const data = {nivel: 'any_nivel'}
    sut.add(data)
    expect(addLevelRepositorySpy).toHaveBeenCalledWith(data)
  })

  test('Should throws if AddLevelRepository throws', async() => {
    const { sut, addLevelRepository } = makeSut()
    jest.spyOn(addLevelRepository, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add({nivel: 'any_nivel'})
    await expect(promise).rejects.toThrow()
  })
})