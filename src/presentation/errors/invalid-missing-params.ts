export class InvalidMissingParams extends Error {
  constructor(paramName: string) {
    super(`Invalid/missing param: ${paramName}`);
    this.name = "InvalidMissingParams";
  }
}
