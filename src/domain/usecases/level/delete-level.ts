export interface DeleteLevel {
  delete: (levelId: string) => Promise<void>
}
