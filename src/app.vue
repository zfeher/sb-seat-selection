<template>
  <div
    id="app"
    :class="$style.app"
  >
    <Seat
      :state="seatStates.available"
      mark="A"
      @click.native="handleSeatClick(1)"
    />
    <Seat
      :state="seatStates.companion"
      mark="B"
      @click.native="handleSeatClick(2)"
    />
    <Seat
      :state="seatStates.available"
      @click.native="handleSeatClick(3)"
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

  methods: {
    handleSeatClick(id) {
      console.log('app: seat click', id)
    },
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
