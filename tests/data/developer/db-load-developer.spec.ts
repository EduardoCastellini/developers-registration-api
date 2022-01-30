import {DbLoadDeveloper} from '../../../src/data/usecases/developer'
import {LoadDeveloperRepository} from '../../../src/data/protocols/db/developer'
import { AddDeveloper } from '../../../src/domain/usecases'

import MockDate from 'mockdate'


const makeFakeData = (): AddDeveloper.Params => ({
  nome: "any-name", 
  datanascimento: new Date(), 
  idade: 27, 
  hobby: "any-hobby", 
  sexo: "M", 
  nivelid: "any-nivelid"})

const makeLoadDeveloperRepository = (): LoadDeveloperRepository => {
  class LoadDeveloperRepository implements LoadDeveloperRepository {
    async load (developerId?: string): Promise<LoadDeveloperRepository.Result> {
      return new Promise(resolve => resolve(makeFakeData()))
    }
  }
  return new LoadDeveloperRepository()
}

interface SutTypes {
  sut: DbLoadDeveloper
  loadDeveloperRepository: LoadDeveloperRepository
}

const makeSut = (): SutTypes => {
  const loadDeveloperRepository = makeLoadDeveloperRepository()
  const sut = new DbLoadDeveloper(loadDeveloperRepository)
  return {sut, loadDeveloperRepository}
}

describe("DbLoadDeveloper UseCase", () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should LoadDeveloperRepository return corrects values', async () => {
    const {sut} = makeSut()
    const developer = await sut.load()
    expect(developer).toEqual(makeFakeData())
  })
  test('Should call LoadDeveloperRepository with correct values', async() => {
    const { sut, loadDeveloperRepository } = makeSut()
    const addDeveloperRepositorySpy = jest.spyOn(loadDeveloperRepository, 'load')
    sut.load('any-id')
    expect(addDeveloperRepositorySpy).toHaveBeenCalledWith('any-id')
  })

  test('Should throws if LoadDeveloperRepository throws', async() => {
    const { sut, loadDeveloperRepository } = makeSut()
    jest.spyOn(loadDeveloperRepository, 'load').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.load('any-id')
    await expect(promise).rejects.toThrow()
  })
})