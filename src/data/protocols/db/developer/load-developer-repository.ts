export interface LoadDeveloperRepository {
  load: (name?: string) => Promise<LoadDeveloperRepository.Result>
}

export namespace LoadDeveloperRepository {
  export type Result = any
}
