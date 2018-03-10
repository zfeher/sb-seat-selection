import { colorValidator } from '../color-validator'

describe('colorValidator', () => {
  it('should return if `value` is a color literal', () => {
    expect(colorValidator('#fff')).toBe(true)
    expect(colorValidator('#FFF')).toBe(true)
    expect(colorValidator('#abc')).toBe(true)
    expect(colorValidator('#def')).toBe(true)
    expect(colorValidator('#012')).toBe(true)
    expect(colorValidator('#345')).toBe(true)
    expect(colorValidator('#678')).toBe(true)
    expect(colorValidator('#987')).toBe(true)
    expect(colorValidator('#0ea')).toBe(true)
    expect(colorValidator('#000000')).toBe(true)
    expect(colorValidator('#012abc')).toBe(true)
    expect(colorValidator('#abcdef')).toBe(true)
    expect(colorValidator('#123456')).toBe(true)
    expect(colorValidator('#987654')).toBe(true)

    expect(colorValidator('#ff')).toBe(false)
    expect(colorValidator('#0000000')).toBe(false)
    expect(colorValidator('#gff')).toBe(false)
    expect(colorValidator('#00z')).toBe(false)
    expect(colorValidator('#0!0')).toBe(false)
    expect(colorValidator('')).toBe(false)
    expect(colorValidator({})).toBe(false)
    expect(colorValidator([])).toBe(false)
    expect(colorValidator(123)).toBe(false)
    expect(colorValidator(null)).toBe(false)
    expect(colorValidator(undefined)).toBe(false)
    expect(colorValidator(new Date())).toBe(false)
    expect(colorValidator(/alma/)).toBe(false)
  })
})
