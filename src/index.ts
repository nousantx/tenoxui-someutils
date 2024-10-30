import { merge } from './utils/merge'
import { transformClasses } from './utils/transform-class'
import { createColors, createRGBColors } from './utils/color-generator'
import { createValue, createProperty } from './utils/createSameValue'

const someutils = {
  merge,
  transformClasses,
  createColors,
  createRGBColors,
  createValue,
  createProperty
}

export { merge, transformClasses, createColors, createRGBColors, createValue, createProperty }
export default someutils
