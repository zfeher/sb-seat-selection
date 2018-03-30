import Vue from 'vue'
import seatMarkValidator from '../seat-mark-validator'

Vue.config.silent = true

describe('seatMarkValidator', () => {
  it('should return if the specified `value` is valid mark', () => {
    'ABCDEFX'.split('').forEach(mark => {
      expect(seatMarkValidator(mark)).toBe(true)
    })

    'abcdefx'.split('').forEach(mark => {
      expect(seatMarkValidator(mark)).toBe(true)
    })

    'ghijklmnopqrstuvwyz0123456789~!@#$%^&*()_+`-=[]{};\\:"|,./<>?'.split('').forEach(mark => {
      expect(seatMarkValidator(mark)).toBe(false)
    })

    expect(seatMarkValidator(undefined)).toBe(false)
    expect(seatMarkValidator(null)).toBe(false)
    expect(seatMarkValidator({})).toBe(false)
    expect(seatMarkValidator([])).toBe(false)
    expect(seatMarkValidator(123)).toBe(false)
    expect(seatMarkValidator('')).toBe(false)
    expect(seatMarkValidator(new Date())).toBe(false)
    expect(seatMarkValidator(/almafa/)).toBe(false)
  })
})
