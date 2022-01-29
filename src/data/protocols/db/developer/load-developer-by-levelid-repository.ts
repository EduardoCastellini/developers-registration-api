export interface LoadDeveloperByLevelIdRepository {
  loadByLevelId: (levelId?: string) => Promise<LoadDeveloperByLevelIdRepository.Result>
}

export namespace LoadDeveloperByLevelIdRepository {
  export type Result = any
}
