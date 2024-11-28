export function createValue<T extends string, U extends Record<string, string>>(
  keys: T[],
  values: U
): Record<T, U> {
  return keys.reduce(
    (acc, key) => {
      acc[key] = values
      return acc
    },
    {} as Record<T, U>
  )
}

type SameValueObject<T extends string> = {
  [K in T]: K
}

export function createSameValue<T extends string>(values: T[]): SameValueObject<T> {
  return values.reduce((acc, value) => {
    acc[value] = value
    return acc
  }, {} as SameValueObject<T>)
}

type PropertyValue = string | string[]

type PropertyConfig = {
  property: PropertyValue
  value: string
}

type PropertyConfigObject = {
  [key: string]: PropertyConfig
}

export function createProperty(
  config: { [key: string]: PropertyValue },
  valueTemplate: string = 'rgb({0} / var(--{1}-opacity))'
): PropertyConfigObject {
  return Object.entries(config).reduce((acc, [key, property]) => {
    acc[key] = {
      property,
      value: valueTemplate.replace(/\{1\}/g, key)
    }
    return acc
  }, {} as PropertyConfigObject)
}
