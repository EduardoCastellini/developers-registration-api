export interface LoadLevel {
  load: (levelId?: string) => Promise<LoadLevel.Result>
}

export namespace LoadLevel {
  export type Result = any
}
