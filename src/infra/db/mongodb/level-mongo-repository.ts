import { v4 } from 'uuid'
import { MongoHelper } from './mongo-helper'
import { AddLevelRepository, LoadLevelRepository, UpdateLevelRepository, DeleteLevelRepository } from '../../../data/protocols'

export class LevelMongoRepository implements AddLevelRepository, LoadLevelRepository, UpdateLevelRepository, DeleteLevelRepository {
  async add (data: AddLevelRepository.Params): Promise<void> {
    const levelCollection = MongoHelper.getCollection('levels')
    await levelCollection.insertOne({ ...data, id: v4() })
  }

  async load (levelId?: string): Promise<LoadLevelRepository.Result> {
    const levelCollection = MongoHelper.getCollection('levels')
    const levels = levelId
      ? await levelCollection.find<LoadLevelRepository.Result>({ id: levelId }, { projection: { _id: 0, id: 1, nivel: 1 } }).toArray()
      : await levelCollection.find<LoadLevelRepository.Result>({}, { projection: { _id: 0, id: 1, nivel: 1 } }).toArray()
    return levels
  }

  async update (levelId: string, data: UpdateLevelRepository.Params): Promise<UpdateLevelRepository.Result> {
    const levelCollection = MongoHelper.getCollection('levels')
    await levelCollection.updateOne(
      { id: levelId },
      { $set: { ...data } }
    )

    const developer = await levelCollection.findOne<UpdateLevelRepository.Result>(
      { id: levelId },
      { projection: { _id: 0, id: 1, nivel: 1 } }
    )
    return developer
  }

  async delete (levelId: string): Promise<void> {
    if (levelId) {
      const levelCollection = MongoHelper.getCollection('levels')
      await levelCollection.deleteOne({ id: levelId })
    }
  };
}
