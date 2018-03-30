<!--
<template>
  <BaseSeat
    v-bind="$props"
    @click.native="handleClick"
  />
</template>
-->

<script>
import BaseSeat from './base-seat/base-seat'
import seatMarkValidator from '@/prop-validators/seat-mark-validator'
import seatStateValidator from '@/prop-validators/seat-state-validator'
import { SEAT_STATE_AVAILABLE } from '@/constants'

export default {
  components: {
    BaseSeat,
  },

  props: {
    mark: {
      type: String,
      default: 'x',
      validator: seatMarkValidator,
    },

    state: {
      type: String,
      default: '',
      validator: seatStateValidator,
    },
  },

  methods: {
    handleClick($event) {
      if (this.isNotAvailableState()) {
        $event.stopImmediatePropagation()
      }
    },

    isNotAvailableState() {
      return this.state !== SEAT_STATE_AVAILABLE
    },
  },

  render(h) {
    return h(BaseSeat, {
      props: this.$props,
      nativeOn: {
        click: this.handleClick,
      },
    })
  },
}
</script>
