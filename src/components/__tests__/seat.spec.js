import Vue from 'vue'
import { mount } from '@vue/test-utils'
import { SEAT_STATE_AVAILABLE, SEAT_STATE_SELECTED, SEAT_STATES } from '@/constants'
import Seat from '../seat'

describe('seat', () => {
  it.skip('should change the state to selected from available', () => {
    const MockBaseSeat = { name: 'MockBaseSeat', template: `<div id="mock-base-seat"/>` }
    const wrapper = mount(Seat, {
      stubs: {
        BaseSeat: MockBaseSeat,
      },
      propsData: { code: '1A', mark: 'A', state: SEAT_STATE_AVAILABLE },
    })

    // these doesn't work right now, maybe because of the stubbing donno
    // expect(wrapper.find(MockBaseSeat).html()).toBe('true')
    // expect(wrapper.find(BaseSeat).html()).toBe('true')
    // expect(wrapper.find({ name: 'MockBaseSeat' }).html()).toBe('true')
    // expect(wrapper.find({ name: 'mock-base-seat' }).html()).toBe('true')
    // expect(wrapper.find({ name: 'BaseSeat' }).html()).toBe('true')
    // expect(wrapper.find({ name: 'base-seat' }).html()).toBe('true')

    // expect(wrapper.find('#mock-base-seat').html()).toBe('true')
    wrapper.find('#mock-base-seat').trigger('click', { altKey: false })

    // TODO should switch form available => selected
    // TODO should switch form selected => available
    // TODO should not switch ...
    //  or simply do 1-2 it test and test handleClick alone?

    // expect(wrapper.html()).toBe('true')
  })

  describe('computed', () => {
    describe('canSelectSeat', () => {
      let vm

      beforeAll(() => {
        vm = createVm()
      })

      const testCases = SEAT_STATES.map(state => ({
        state,
        expected: state === SEAT_STATE_AVAILABLE,
      }))

      testCases.forEach(testCase => {
        const { state, expected } = testCase

        it(`should return ${expected} if state is ${state}`, () => {
          vm.state = state
          const actual = vm.canSelectSeat
          expect(actual).toBe(expected)
        })
      })
    })

    describe('canUnselectSeat', () => {
      let vm

      beforeAll(() => {
        vm = createVm()
      })

      const testCases = SEAT_STATES.map(state => ({
        state,
        expected: state === SEAT_STATE_SELECTED,
      }))

      testCases.forEach(testCase => {
        const { state, expected } = testCase

        it(`should return ${expected} if state is ${state}`, () => {
          vm.state = state
          const actual = vm.canUnselectSeat
          expect(actual).toBe(expected)
        })
      })
    })
  })
})

const createVm = () =>
  new Vue({ ...Seat, propsData: { code: '1A', mark: 'A', state: SEAT_STATE_AVAILABLE } })
