import { MongoHelper, DeveloperMongoRepository } from '../../../../src/infra/db/mongodb/'

import { Collection } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : ''
let developersCollection: Collection

const mockAddDevelopersParams = () => ({
  nome: "any-name", 
  datanascimento: new Date(), 
  idade: 27, 
  hobby: "any-hobby", 
  sexo: "M", 
  nivelid: "any-nivelid"
})

const makeSut = (): DeveloperMongoRepository => {
  return new DeveloperMongoRepository()
}

describe('DeveloperMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    developersCollection = MongoHelper.getCollection('developers')
    await developersCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should add a developer on success', async () => {
      const sut = makeSut()
      await sut.add(mockAddDevelopersParams())
      const count = await developersCollection.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('loadAll()', () => {
    test('Should load all developers on success', async () => {
      await developersCollection.insertOne({...mockAddDevelopersParams(), id: 'any-id'})
      const sut = makeSut()
      const developers = await sut.load()
      expect(developers.length).toBe(1)
      expect(developers[0].id).toBeTruthy()
      expect(developers[0].nome).toBe('any-name')
      expect(developers[0].idade).toBe(27)
      //...
    })

    test('Should load empty list', async () => {
      const sut = makeSut()
      const developers = await sut.load('non-existent ID')
      expect(developers.length).toBe(0)
    })
  })
})
