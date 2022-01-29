import { UpdateLevel } from '../../../../domain/usecases'
import { LevelModel } from '../../../../domain/models'

export interface UpdateLevelRepository {
  update: (levelId: string, data: UpdateLevelRepository.Params) => Promise<UpdateLevelRepository.Result>
}

export namespace UpdateLevelRepository {
  export type Params = UpdateLevel.Params
  export type Result = LevelModel | null
}
