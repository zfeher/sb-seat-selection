<!--
<template functional>
  <div :class="[$style.background, themeAvailable.background]">
    <span :class="$style.mark">{{ mark }}</span>
  </div>
</template>
-->

<script>
import { pathOr } from 'ramda'
import seatMarkValidator from '@/prop-validators/seat-mark-validator'
import seatStateValidator from '@/prop-validators/seat-state-validator'
import { SEAT_STATES_MAP } from '@/constants'

export default {
  functional: true,

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

  // vue test-utils doesn't like functional comps with render function which
  //  relies on css modules :(
  // with functional template or normal comp it creates empty {} for css module stuff
  render(h, context) {
    const { $style, props: { state, mark } } = context
    const theme = getTheme(state, context)
    const nativeOnClick = pathOr(() => {}, 'data.nativeOn.click'.split('.'), context)
    return (
      <div onClick={nativeOnClick} class={[$style.background, theme.background]}>
        <span class={$style.mark}>{mark}</span>
      </div>
    )
  },
}

const getTheme = (state, context) => {
  const {
    themeAvailable,
    themeUnavailable,
    themeAssigned,
    themeCompanion,
    themeSelected,
    themeDefault,
  } = context

  switch (state) {
    case SEAT_STATES_MAP.available:
      return themeAvailable
    case SEAT_STATES_MAP.unavailable:
      return themeUnavailable
    case SEAT_STATES_MAP.assigned:
      return themeAssigned
    case SEAT_STATES_MAP.companion:
      return themeCompanion
    case SEAT_STATES_MAP.selected:
      return themeSelected
  }

  return themeDefault
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

<style module="themeUnavailable" src="./theme-unavailable.css">
</style>

<style module="themeCompanion" src="./theme-companion.css">
</style>

<style module="themeSelected" src="./theme-selected.css">
</style>
