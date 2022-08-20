import { RegisterScoreSave } from '@/domain/entities'
import { throwError } from '@/validations/errors/ThrowError'
import { dateGreaterThanCurrent, isDateValid, notEmpty } from '@/validations/modules'

export class RegisterValidator {
  static async Params (Params: RegisterScoreSave): Promise<void> {
    // name
    throwError(!notEmpty(Params.name), 'Name field is required.')
    throwError(Params.name.length > 255, 'Name field is too big.')
    throwError(Params.name.length < 2, 'Name field is too small.')

    // birth
    throwError(!notEmpty(Params.birth), 'Date of birth field is required.')
    throwError(!isDateValid(Params.birth), 'Date field does not have the required date template.')
    throwError(!dateGreaterThanCurrent(Params.birth), 'Date field is greater than the current date.')
  }
}
