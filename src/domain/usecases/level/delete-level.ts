export interface DeleteLevel {
  delete: (levelId: string) => Promise<Error | undefined>
}
