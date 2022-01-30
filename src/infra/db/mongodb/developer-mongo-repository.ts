import { v4 } from 'uuid'
import { MongoHelper } from './mongo-helper'
import { AddDeveloperRepository, LoadDeveloperRepository, UpdateDeveloperRepository, LoadDeveloperByLevelIdRepository, DeleteDeveloperRepository } from '../../../data/protocols'
import { DeveloperModel } from '../../../domain/models'
import { AddDeveloper } from '../../../domain/usecases'

export class DeveloperMongoRepository
implements AddDeveloperRepository,
  LoadDeveloperRepository,
  UpdateDeveloperRepository,
  LoadDeveloperByLevelIdRepository,
  DeleteDeveloperRepository {
  async add (data: AddDeveloper.Params): Promise<void> {
    const developerCollection = MongoHelper.getCollection('developers')
    await developerCollection.insertOne({ ...data, id: v4() })
  }

  async load (developerId?: string | undefined): Promise<LoadDeveloperRepository.Result> {
    const developerCollection = MongoHelper.getCollection('developers')
    const developers = developerId
      ? await developerCollection.find(
        { id: developerId },
        {
          projection: { _id: 0, id: 1, nome: 1, datanascimento: 1, hobby: 1, idade: 1, sexo: 1, nivelid: 1 }
        }).toArray()
      : await developerCollection.find(
        { },
        { projection: { _id: 0, id: 1, nome: 1, datanascimento: 1, hobby: 1, idade: 1, sexo: 1, nivelid: 1 } }).toArray()

    const levelsCollection = MongoHelper.getCollection('levels')
    const levels = await levelsCollection.find({}, { projection: { _id: 0, id: 1, nivel: 1 } }).toArray()
    return developers.map(developer => ({
      ...developer,
      nivel: levels.find(level => level.id === developer.nivelid)?.nivel || ''
    }))
  }

  async loadByLevelId (levelId?: string | undefined): Promise<any> {
    const developerCollection = MongoHelper.getCollection('developers')
    const developer = await developerCollection.findOne(
      { nivelid: levelId },
      { projection: { _id: 0, id: 1, nome: 1, datanascimento: 1, hobby: 1, idade: 1, sexo: 1, nivelid: 1 } }
    )

    return developer
  }

  async update (developerId: string, data: DeveloperModel): Promise<UpdateDeveloperRepository.Result> {
    const developerCollection = MongoHelper.getCollection('developers')
    await developerCollection.updateOne(
      { id: developerId },
      { $set: { ...data } }
    )

    const developer = await developerCollection.findOne(
      { id: developerId },
      { projection: { _id: 0, id: 1, nome: 1, datanascimento: 1, hobby: 1, idade: 1, sexo: 1, nivelid: 1 } }
    )
    if (developer) return developer
  }

  async delete (developerId: string): Promise<void> {
    const developerCollection = MongoHelper.getCollection('developers')
    await developerCollection.deleteOne({ id: developerId })
  }
}
