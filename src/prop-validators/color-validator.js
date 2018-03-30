const colorValidator = value => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)

export default colorValidator
