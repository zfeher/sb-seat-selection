import Vue from 'vue'
import { SEAT_STATES } from '@/constants.js'
import { seatStateValidator } from '../seat-state-validator.js'

Vue.config.silent = true

describe('seatStateValidator', () => {
  it('should return if the specified `value` is valid state', () => {
    SEAT_STATES.forEach(state => {
      expect(seatStateValidator(state)).toBe(true)
    })

    expect(seatStateValidator('invalid')).toBe(false)
    expect(seatStateValidator('')).toBe(false)
  })
})
