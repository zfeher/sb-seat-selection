import { curry } from 'ramda'

export const includes = curry((searchTerm, list) => list.includes(searchTerm))

export const isString = value => Object.prototype.toString.call(value) === '[object String]'

export const isObject = value => Object.prototype.toString.call(value) === '[object Object]'
