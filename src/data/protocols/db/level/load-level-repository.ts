export interface LoadLevelRepository {
  load: (levelId?: string) => Promise<LoadLevelRepository.Result>
}

export namespace LoadLevelRepository {
  export type Result = any
}
