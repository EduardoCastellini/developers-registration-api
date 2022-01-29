import { UpdateDeveloper } from '../../../../domain/usecases'

export interface UpdateDeveloperRepository {
  update: (developerId: string, data: UpdateDeveloper.Params) => Promise<UpdateDeveloperRepository.Result>
}

export namespace UpdateDeveloperRepository {
  export type Result = any
}
