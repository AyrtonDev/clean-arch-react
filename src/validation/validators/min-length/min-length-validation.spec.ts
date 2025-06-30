import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators'
import { faker } from '@faker-js/faker'

const makeSut = (minLength: number) => new MinLengthValidation(faker.lorem.word(), minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.lorem.word(3))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.lorem.word(5))
    expect(error).toBeFalsy()
  })
})
