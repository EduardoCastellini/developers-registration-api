export interface DeleteDeveloperRepository {
  delete: (developerId: string) => Promise<void>
}
