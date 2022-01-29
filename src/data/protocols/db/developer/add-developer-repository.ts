import { AddDeveloper } from '../../../../domain/usecases'

export interface AddDeveloperRepository {
  add: (data: AddDeveloper.Params) => Promise<void>
}

export namespace AddDeveloperRepository {
  export type Params = AddDeveloper.Params
}
