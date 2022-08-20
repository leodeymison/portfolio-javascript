export function notEmpty (value: any): boolean {
  var newValue
  if (value === undefined || value == null) {
    return false
  } else {
    if (typeof (value) === 'string') {
      newValue = value.trim() // remove os espaços desnecessários
    }
    if (newValue === '') {
      return false
    } else {
      return true
    }
  }
};

export function dateGreaterThanCurrent (value: string): boolean {
  const dataValueYear = value.slice(0, 4)
  const dataValuemes = value.slice(5, 7)
  const dataValuedia = value.slice(8, 10)

  var data = new Date()
  var dataCurrentDay = String(data.getDate()).padStart(2, '0')
  var dataCurrentMonth = String(data.getMonth() + 1).padStart(2, '0')
  var dataCurrentYear = data.getFullYear()

  const dateClient = dataValueYear + dataValuemes + dataValuedia
  const dateService = `${dataCurrentYear}${dataCurrentMonth}${dataCurrentDay}`

  console.log(dateClient)
  console.log(dateService)
  // eslint-disable-next-line no-unused-expressions, no-unneeded-ternary
  return parseInt(dateClient) >= parseInt(dateService) ? false : true
}

export function isDateValid (value: string): boolean {
  const valueValid = /\d\d\d\d-\d\d-\d\d/
  const dataValue = valueValid.exec(value)
  // eslint-disable-next-line no-unused-expressions, no-unneeded-ternary
  return dataValue !== null ? true : false
}
