<template>
  <div :class="[$style.background, theme.background]">
    <span :class="$style.mark">Base Seat</span>
  </div>
</template>

<script>
import seatMarkValidator from '@/prop-validators/seat-mark-validator'
import seatStateValidator from '@/prop-validators/seat-state-validator'
import { SEAT_STATES_MAP } from '@/constants'

export default {
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

  computed: {
    theme() {
      switch (this.state) {
        case SEAT_STATES_MAP.available:
          return this.themeAvailable
        case SEAT_STATES_MAP.assigned:
          return this.themeAssigned
        case SEAT_STATES_MAP.companion:
          return this.themeCompanion
        case SEAT_STATES_MAP.selected:
          return this.themeSelected
      }

      return this.themeDefault
    },
  },
}
</script>

<style module>
.background {
  width: 128px;
  height: 128px;
}

.mark {
  color: #eee;
}
</style>

<style module="themeDefault" src="./theme-default.css">
</style>

<style module="themeAssigned" src="./theme-assigned.css">
</style>

<style module="themeAvailable" src="./theme-available.css">
</style>

<style module="themeCompanion" src="./theme-companion.css">
</style>

<style module="themeSelected" src="./theme-selected.css">
</style>
