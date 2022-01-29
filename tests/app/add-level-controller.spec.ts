import {AddLevelController} from '../../src/app/controllers/level'
import {AddLevel} from '../../src/domain/usecases/level'
import {created} from '../../src/app/helpers'

const makeFakeRequest = () => ({
  body: {
    nivel: "JUNIOR"
  }
})

interface sutTypes {
  sut: AddLevelController
  addLevelStub: AddLevel
}

const makeAddLevel = (): AddLevel => {
  class AddLevelStub implements AddLevel {
    async add (data: AddLevel.Params): Promise<void>{
      return new Promise(resolve => resolve())
    }
  }
  return new AddLevelStub()
}

const makeSut = (): sutTypes => {
  const addLevelStub = makeAddLevel()
  const sut = new AddLevelController(addLevelStub)

  return {
    sut,
    addLevelStub
  }
}
describe('AddLevelController', () => {

  test('Should call AddLevel correct value', async () => {
    const { sut, addLevelStub } = makeSut()
    const addLevelStubSpy = jest.spyOn(addLevelStub, 'add')
    await sut.handle(makeFakeRequest())
    expect(addLevelStubSpy).toHaveBeenCalledWith(makeFakeRequest().body)
  })
  test('Should return 201 on success', async () => {
    const { sut } = makeSut()
    const httpResponde = await sut.handle(makeFakeRequest())
    expect(httpResponde).toEqual(created({ message: 'Nível cadastrado com sucesso!' }))
  })
})