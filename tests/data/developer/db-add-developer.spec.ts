import {DbAddDeveloper} from '../../../src/data/usecases/developer/'
import {AddDeveloperRepository} from '../../../src/data/protocols/db/developer'
import { AddDeveloper } from '../../../src/domain/usecases'

const makeFakeData = (): AddDeveloper.Params => ({
  nome: "any-name", 
  datanascimento: new Date(), 
  idade: 27, 
  hobby: "any-hobby", 
  sexo: "M", 
  nivelid: "any-nivelid"})

const makeAddDeveloperRepository = (): AddDeveloperRepository => {
  class AddDeveloperRepositoy implements AddDeveloperRepository {
    add (data: AddDeveloper.Params): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddDeveloperRepositoy()
}

interface SutTypes {
  sut: DbAddDeveloper
  addDeveloperRepository: AddDeveloperRepository
}

const makeSut = (): SutTypes => {
  const addDeveloperRepository = makeAddDeveloperRepository()
  const sut = new DbAddDeveloper(addDeveloperRepository)
  return {sut, addDeveloperRepository}
}

describe("DbAddDeveloper UseCase", () => {
  test('Should call AddDeveloperRepository with correct values', async() => {
    const { sut, addDeveloperRepository } = makeSut()
    const addDeveloperRepositorySpy = jest.spyOn(addDeveloperRepository, 'add')
    const data = makeFakeData()
    sut.add(data)
    expect(addDeveloperRepositorySpy).toHaveBeenCalledWith(data)
  })

  test('Should throws if AddDeveloperRepository throws', async() => {
    const { sut, addDeveloperRepository } = makeSut()
    jest.spyOn(addDeveloperRepository, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakeData())
    await expect(promise).rejects.toThrow()
  })
})