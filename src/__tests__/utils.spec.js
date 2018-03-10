import { isObject, isString } from '../utils'

describe('isString', () => {
  it('should return if a value is string or not', () => {
    expect(isString('dummy')).toBe(true)
    expect(isString('123')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString(123)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(new Date())).toBe(false)
    expect(isString(new RegExp())).toBe(false)
  })
})

describe('isObject', () => {
  it('should return if a value is an object or not', () => {
    expect(isObject({})).toEqual(true)

    expect(isObject([])).toEqual(false)
    expect(isObject(() => {})).toEqual(false)
    expect(isObject(new Date())).toEqual(false)
    expect(isObject(new RegExp())).toEqual(false)
    expect(isObject('dummy')).toEqual(false)
    expect(isObject(123)).toEqual(false)
    expect(isObject(true)).toEqual(false)
    expect(isObject(null)).toEqual(false)
    expect(isObject(undefined)).toEqual(false)
    expect(isObject(void 0)).toEqual(false)
  })
})
