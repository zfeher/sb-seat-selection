<template>
  <div :class="$style.background">
    <span :class="$style.mark">Base Seat</span>
  </div>
</template>

<script>
import { SEAT_THEME_ASSIGNED } from '../constants'
import { seatMarkValidator } from '../prop-validators/seat-mark-validator'
import { seatThemeValidator } from '../prop-validators/seat-theme-validator'

export default {
  props: {
    mark: {
      type: String,
      default: 'x',
      validator: seatMarkValidator,
    },

    theme: {
      type: Object,
      default: () => SEAT_THEME_ASSIGNED,
      validator: seatThemeValidator,
    },
  },
}
</script>

<style module>
.background {
  background-color: cadetblue;
}

.mark {
  color: beige;
}
</style>
