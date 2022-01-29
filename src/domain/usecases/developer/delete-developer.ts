export interface DeleteDeveloper {
  delete: (developerId: string) => Promise<void>
}
