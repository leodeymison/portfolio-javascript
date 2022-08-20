export function dateFactory (value: string): number {
  const dataValue: number = parseInt(value.slice(0, 4))
  const res = new Date().getFullYear() - dataValue
  if (res === 0) {
    const dataValue: number = parseInt(value.slice(5, 7))
    const data = new Date().getMonth() + 1
    return (data - dataValue) / 10
  }
  return res
}
