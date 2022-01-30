import {AddDeveloperController} from '../../../src/app/controllers/developer'
import {AddDeveloper} from '../../../src/domain/usecases/developer'
import {created} from '../../../src/app/helpers'

const makeFakeRequest = () => ({
  body: {
    nome: "Eduardo Castellini 2",
    sexo: "M",
    datanascimento: new Date(),
    idade: 27,
    hobby: "programar",
    nivelid: "9c4c1976-c611-47a5-8cb2-ec24a60decf0"
  }
})

interface sutTypes {
  sut: AddDeveloperController
  addDeveloper: AddDeveloper
}

const makeAddDeveloper = (): AddDeveloper => {
  class AddDeveloperStub implements AddDeveloper {
    async add (data: AddDeveloper.Params): Promise<void>{
      return new Promise(resolve => resolve())
    }
  }
  return new AddDeveloperStub()
}

const makeSut = (): sutTypes => {
  const addDeveloper = makeAddDeveloper()
  const sut = new AddDeveloperController(addDeveloper)

  return {
    sut,
    addDeveloper
  }
}
describe('AddDeveloperController', () => {

  test('Should call AddDeveloper correct value', async () => {
    const { sut, addDeveloper } = makeSut()
    const addDeveloperSpy = jest.spyOn(addDeveloper, 'add')
    const request = makeFakeRequest()
    await sut.handle(request)
    expect(addDeveloperSpy).toHaveBeenCalledWith(request.body)
  })
  test('Should return 201 on success', async () => {
    const { sut } = makeSut()
    const httpResponde = await sut.handle(makeFakeRequest())
    expect(httpResponde).toEqual(created({ message: 'Desenvolvedor cadastrado com sucesso!' }))
  })
})