export class AlreadyUsedError extends Error {
  customError: boolean;
  statusCode: number;

  constructor (fromObj: string) {
    super(
      `${fromObj} já está sendo ultilizado, não é possivel realizar a exclusão!`
    )
    this.name = 'AlreadyUsedError'
    this.customError = true
    this.statusCode = 400
  }
}
