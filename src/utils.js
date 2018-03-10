/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {any} value the value to check.
 * @returns {boolean} returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => false
 *
 * isObject(Function)
 * // => false
 *
 * isObject(null)
 * // => false
 */
export const isObject = value => Object.prototype.toString.call(value) === '[object Object]'
