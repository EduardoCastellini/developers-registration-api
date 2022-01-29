import { LevelModel } from '../../../../domain/models'
export interface LoadLevelRepository {
  load: (level?: string) => Promise<LoadLevelRepository.Result>
}

export namespace LoadLevelRepository {
  export type Result = LevelModel[] | null
}
