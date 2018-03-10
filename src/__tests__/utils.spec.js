import { isObject } from '../utils'

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
