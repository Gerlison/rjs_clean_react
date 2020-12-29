export class UnexpectedError extends Error {
  constructor() {
    super('Algo de errado não está certo. Tente novamente.')
    this.name = 'UnexpectedError'
  }
}
