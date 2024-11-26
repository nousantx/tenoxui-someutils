import someutils from './dist/index.esm.js'

const display = someutils.createValue(['flex', 'block', 'inline-flex'])

console.log(display)

const property = someutils.createProperty({
  bg: 'background',
  text: 'color',
  'shadow-c': '--shadow-color'
})

console.log(property)

// Example with custom value template:
const customProperty = someutils.createProperty(
  {
    bg: 'backgroundColor',
    text: 'color',
    'shadow-c': '--shadow-color'
  },
  'rgb({0} / var(--{1}-opacity, 1))'
)

console.log(customProperty)
