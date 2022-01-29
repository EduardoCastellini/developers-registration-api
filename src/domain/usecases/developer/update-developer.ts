import { DeveloperModel } from '../../models'

export interface UpdateDeveloper {
  update: (developerId: string, data: UpdateDeveloper.Params) => Promise<any>
}

export namespace UpdateDeveloper {
  export type Params = Omit<DeveloperModel, 'id'>
}
