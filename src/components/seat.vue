<template>
  <BaseSeat
    v-bind="$props"
    @click.native="handleClick"
  />
</template>

<script>
import { SEAT_STATE_AVAILABLE, SEAT_STATE_SELECTED } from '@/constants'
import seatStateValidator from '@/prop-validators/seat-state-validator'
import seatMarkValidator from '@/prop-validators/seat-mark-validator'
import BaseSeat from './base-seat/base-seat'

export default {
  components: {
    BaseSeat,
  },

  props: {
    code: {
      type: String,
      required: true,
      // TODO
      // validator: seatCodeValidator,
    },

    mark: {
      type: String,
      required: true,
      validator: seatMarkValidator,
    },

    state: {
      type: String,
      required: true,
      validator: seatStateValidator,
    },
  },

  computed: {
    canSelectSeat() {
      return this.state === SEAT_STATE_AVAILABLE
    },

    canUnselectSeat() {
      return this.state === SEAT_STATE_SELECTED
    },
  },

  methods: {
    // ...mapMutations([mutationTypes.SELECT_SEAT, mutationTypes.UNSELECT_SEAT]),

    handleClick($event) {
      const { altKey } = $event

      if (altKey) {
        if (this.canUnselectSeat) {
          this.$emit('unselect')
          // this.unselectSeat(this.code)
        }
      } else {
        if (this.canSelectSeat) {
          this.$emit('select')
          // this.selectSeat(this.code)
        }
      }
    },
  },

  // vue test-utils can't do shallow render on this yet :(
  // render(h) {
  //   return h(BaseSeat, {
  //     props: this.$props,
  //     nativeOn: {
  //       click: this.handleClick,
  //     },
  //   })
  // },
}
</script>
