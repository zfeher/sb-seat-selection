import Vue from 'vue'
import { curry } from 'ramda'

const { warn } = Vue.util

export const validateAndLog = curry((validator, propName, validValueMessage, value) => {
  let res = validator(value)
  if (!res) {
    warn(
      `Invalid prop: '${JSON.stringify(
        value
      )}' is not a valid value for "${propName}".\n\n${validValueMessage}`
    )
  }
  return res
})
