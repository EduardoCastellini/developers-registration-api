import { LevelModel } from '../../models'

export interface UpdateLevel {
  update: (levelId: string, data: UpdateLevel.Params) => Promise<LevelModel | null>
}

export namespace UpdateLevel {
  export type Params = Omit<LevelModel, 'id'>
}
