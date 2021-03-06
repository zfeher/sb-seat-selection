import { __ } from 'ramda'
import { SEAT_STATES } from '@/constants'
import { includes } from '@/utils'
import { validateAndLog } from './_internal'

const validator = includes(__, SEAT_STATES)

const seatStateValidator = validateAndLog(validator, 'state', `Valid values: [${SEAT_STATES}]`)

export default seatStateValidator
