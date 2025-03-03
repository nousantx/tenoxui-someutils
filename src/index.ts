import { merge } from './utils/merge'
import { transformClasses } from './utils/transform-class'
import { createValue, createSameValue, createProperty } from './utils/create-value'
import { toChildString, fromChildString } from './utils/create-template'
import { is } from './utils/match-value'

const someutils = {
  merge,
  transformClasses,
  createValue,
  createSameValue,
  createProperty,
  toChildString,
  fromChildString,
  is
}

export {
  merge,
  transformClasses,
  createValue,
  createSameValue,
  createProperty,
  toChildString,
  fromChildString,
  is
}
export default someutils
