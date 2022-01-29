import { DeveloperModel } from '../../models'

export interface AddDeveloper {
  add: (data: AddDeveloper.Params) => Promise<void>
}

export namespace AddDeveloper {
  export type Params = Omit<DeveloperModel, 'id'>
}
