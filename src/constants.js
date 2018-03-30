const SEAT_STATE_AVAILABLE = 'available'
const SEAT_STATE_ASSIGNED = 'assigned'
const SEAT_STATE_COMPANION = 'companion'
const SEAT_STATE_SELECTED = 'selected'

export const SEAT_STATES_MAP = {
  available: SEAT_STATE_AVAILABLE,
  assigned: SEAT_STATE_ASSIGNED,
  companion: SEAT_STATE_COMPANION,
  selected: SEAT_STATE_SELECTED,
}

export const SEAT_STATES = Object.values(SEAT_STATES_MAP)
