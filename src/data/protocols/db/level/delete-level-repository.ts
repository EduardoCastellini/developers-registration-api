export interface DeleteLevelRepository {
  delete: (levelId: string) => Promise<void>
}
