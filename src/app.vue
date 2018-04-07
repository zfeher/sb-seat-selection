<template>
  <div
    id="app"
    :class="$style.app"
  >
    <Seat
      :state="seatStates.available"
      code="1A"
      mark="A"
    />
    <Seat
      :state="seatStates.companion"
      code="2B"
      mark="B"
    />
    <Seat
      :state="seatStates.assigned"
      code="3C"
      mark="c"
    />
    <Seat
      :state="seatStates.unavailable"
      code="4D"
      mark="D"
    />
    <Seat
      :state="seatStates.selected"
      code="5A"
      mark="a"
    />
  </div>
</template>

<script>
import Seat from './components/seat'
import { SEAT_STATES_MAP } from '@/constants'

export default {
  name: 'App',

  components: {
    Seat,
  },

  data() {
    return {
      seatStates: SEAT_STATES_MAP,
    }
  },

  methods: {},
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
