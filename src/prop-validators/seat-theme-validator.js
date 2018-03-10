import { __, all, allPass, both, propEq, values, keys, compose } from 'ramda'
import { isObject, includes } from '../utils'
import { colorValidator } from './color-validator'
import { validateAndLog } from './_internal'

const SEAT_THEME_KEYS = ['backgroundColor', 'textColor']

const hasValidKeys = compose(
  both(propEq('length', SEAT_THEME_KEYS.length), all(includes(__, SEAT_THEME_KEYS))),
  keys
)

const hasValidValues = compose(all(colorValidator), values)

const validator = allPass([isObject, hasValidKeys, hasValidValues])

export const seatThemeValidator = validateAndLog(
  validator,
  'theme',
  "Valid structure: { backgroundColor: '#fff', textColor: '#000000' }"
)
