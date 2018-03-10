import Vue from 'vue'
import { seatThemeValidator } from '../seat-theme-validator'

Vue.config.silent = true

describe('seatThemeValidator', () => {
  it('should return false if not called with an object', () => {
    let expected = false
    expect(seatThemeValidator(123)).toBe(expected)
    expect(seatThemeValidator('')).toBe(expected)
    expect(seatThemeValidator([])).toBe(expected)
    expect(seatThemeValidator(null)).toBe(expected)
    expect(seatThemeValidator(undefined)).toBe(expected)
    expect(seatThemeValidator(new Date())).toBe(expected)
    expect(seatThemeValidator(/alma/)).toBe(expected)
  })

  it('should return if called with a valid theme', () => {
    expect(seatThemeValidator({ backgroundColor: '#fff', textColor: '#000' })).toBe(true)
    expect(seatThemeValidator({ backgroundColor: '#012abc', textColor: '#def987' })).toBe(true)

    expect(seatThemeValidator({ backgroundColor: '#fff' })).toBe(false)
    expect(seatThemeValidator({ textColor: '#000' })).toBe(false)
    expect(seatThemeValidator({})).toBe(false)

    expect(seatThemeValidator({ backgroundColor: '#gff', textColor: '#000' })).toBe(false)
    expect(seatThemeValidator({ backgroundColor: '#fff', textColor: '#0001' })).toBe(false)
  })
})
