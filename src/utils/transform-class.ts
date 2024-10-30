type CSSProperties = {
  [property: string]: string | number
}
type InputClasses = {
  [className: string]: CSSProperties
}
type OutputProperties = {
  [property: string]: {
    [className: string]: string | number
  }
}

export function transformClasses(input: InputClasses): OutputProperties {
  const output: OutputProperties = {}
  Object.keys(input).forEach((className) => {
    Object.entries(input[className]).forEach(([property, value]) => {
      if (!output[property]) {
        output[property] = {}
      }
      output[property][className] = value
    })
  })
  return output
}
