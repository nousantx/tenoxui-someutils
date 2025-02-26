import type { Classes, CSSPropertyOrVariable } from '@tenoxui/types'

export type InputClasses = {
  [className: string]: {
    [property in CSSPropertyOrVariable]?: string
  }
}

export function transformClasses(input: InputClasses): Classes {
  const output: Classes = {}

  Object.keys(input).forEach((className) => {
    Object.entries(input[className]).forEach(([property, value]) => {
      const typedProperty = property as CSSPropertyOrVariable
      if (!output[typedProperty]) {
        output[typedProperty] = {}
      }

      if (value !== undefined && output[typedProperty]) {
        output[typedProperty]![className] = value
      }
    })
  })

  return output
}
