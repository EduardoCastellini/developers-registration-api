import { LevelModel } from '../../models'

export interface AddLevel {
  add: (data: AddLevel.Params) => Promise<void>
}

export namespace AddLevel {
  export type Params = Omit<LevelModel, 'id'>
}
