export function throwError (val: boolean,message: string): void {
  if (val) {
    throw new Error(message)
  }
}
