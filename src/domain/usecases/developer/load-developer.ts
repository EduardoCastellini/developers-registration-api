import { DeveloperModel } from '../../models'

export interface LoadDeveloper {
  load: (nome?: string) => Promise<LoadDeveloper.Result>
}

export namespace LoadDeveloper {
  export type Result = DeveloperModel[] | undefined
}
