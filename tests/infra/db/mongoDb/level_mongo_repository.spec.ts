import { MongoHelper, LevelMongoRepository } from '../../../../src/infra/db/mongodb'

import { Collection } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : ''
let levelsCollection: Collection

const mockAddDevelopersParams = () => ({
  nivel: "any-nivel",
})

const makeSut = (): LevelMongoRepository => {
  return new LevelMongoRepository()
}

describe('LevelMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    levelsCollection = MongoHelper.getCollection('levels')
    await levelsCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should add a level on success', async () => {
      const sut = makeSut()
      await sut.add(mockAddDevelopersParams())
      const count = await levelsCollection.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('loadAll()', () => {
    test('Should load all level on success', async () => {
      await levelsCollection.insertOne({...mockAddDevelopersParams(), id: 'any-id'})
      const sut = makeSut()
      const nivels = await sut.load()
      expect(nivels.length).toBe(1)
      expect(nivels[0].id).toBeTruthy()
      expect(nivels[0].nivel).toBe('any-nivel')
      //...
    })

    test('Should load empty list', async () => {
      const sut = makeSut()
      const levels = await sut.load('non-existent ID')
      expect(levels.length).toBe(0)
    })
  })
})
