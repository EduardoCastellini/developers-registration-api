import { AddLevel } from '../../../../domain/usecases'

export interface AddLevelRepository {
  add: (data: AddLevelRepository.Params) => Promise<void>
}

export namespace AddLevelRepository {
  export type Params = AddLevel.Params
}
