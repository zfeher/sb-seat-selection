export const SEAT_STATE_AVAILABLE = 'available'
export const SEAT_STATE_UNAVAILABLE = 'unavailable'
export const SEAT_STATE_ASSIGNED = 'assigned'
export const SEAT_STATE_COMPANION = 'companion'
export const SEAT_STATE_SELECTED = 'selected'

export const SEAT_STATES_MAP = {
  available: SEAT_STATE_AVAILABLE,
  unavailable: SEAT_STATE_UNAVAILABLE,
  assigned: SEAT_STATE_ASSIGNED,
  companion: SEAT_STATE_COMPANION,
  selected: SEAT_STATE_SELECTED,
}

export const SEAT_STATES = Object.values(SEAT_STATES_MAP)
