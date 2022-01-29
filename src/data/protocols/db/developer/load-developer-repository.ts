export interface LoadDeveloperRepository {
  load: (developerId?: string) => Promise<LoadDeveloperRepository.Result>
}

export namespace LoadDeveloperRepository {
  export type Result = any
}
