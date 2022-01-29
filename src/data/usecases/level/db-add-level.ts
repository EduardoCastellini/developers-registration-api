import { AddLevel } from '../../../domain/usecases'
import { AddLevelRepository } from '../../protocols'

export class DbAddLevel implements AddLevel {
  constructor (private readonly addLevelRepository: AddLevelRepository) {}

  async add (data: AddLevelRepository.Params): Promise<void> {
    await this.addLevelRepository.add(data)
  }
}
