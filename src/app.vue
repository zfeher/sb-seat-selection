<template>
  <div
    id="app"
    :class="$style.app"
  >
    <BaseSeat
      :state="seatStates.available"
      :mark="null"
    />
  </div>
</template>

<script>
import BaseSeat from './components/base-seat/base-seat.vue'
import { SEAT_STATES_MAP } from '@/constants'

export default {
  name: 'App',

  components: {
    BaseSeat,
  },

  data() {
    return {
      seatStates: SEAT_STATES_MAP,
    }
  },
}
</script>

<style module>
.app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 16px); /* to hide scrollbar */
}
</style>
