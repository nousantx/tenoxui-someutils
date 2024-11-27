import { merge } from './utils/merge'
import { transformClasses } from './utils/transform-class'
import { createColors, createRGBColors } from './utils/color-generator'
import { createValue, createProperty } from './utils/create-value'
import { toChildString } from './utils/create-template'

const someutils = {
  merge,
  transformClasses,
  createColors,
  createRGBColors,
  createValue,
  createProperty,
  toChildString
}

export {
  merge,
  transformClasses,
  createColors,
  createRGBColors,
  createValue,
  createProperty,
  toChildString
}
export default someutils
