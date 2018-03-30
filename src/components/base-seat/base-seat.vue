<template>
  <div :class="[$style.background, theme.background]">
    <span :class="$style.mark">Base Seat</span>
  </div>
</template>

<script>
import { seatMarkValidator } from '@/prop-validators/seat-mark-validator'

export default {
  props: {
    mark: {
      type: String,
      default: 'x',
      validator: seatMarkValidator,
    },
  },

  computed: {
    theme() {
      return this.themeAvailable
      // return this.themeSelected
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
