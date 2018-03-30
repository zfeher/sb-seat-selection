import { validateAndLog } from './_internal'

const MARK_REGEXP = /^[a-fx]$/i
const VALID_MARKS = 'ABCDEFX'.split('').join(', ')

const validator = value => MARK_REGEXP.test(value)

const seatMarkValidator = validateAndLog(validator, 'mark', `Valid values: [${VALID_MARKS}]`)

export default seatMarkValidator
