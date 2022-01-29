import { LevelModel } from '../../models'

export interface LoadLevel {
  load: (level?: string) => Promise<LoadLevel.Result>
}

export namespace LoadLevel {
  export type Result = LevelModel[] | null
}
