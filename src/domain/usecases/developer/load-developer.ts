import { DeveloperModel } from '../../models'

export interface LoadDeveloper {
  load: (developerId?: string) => Promise<LoadDeveloper.Result>
}

export namespace LoadDeveloper {
  export type Result = DeveloperModel[] | undefined
}
